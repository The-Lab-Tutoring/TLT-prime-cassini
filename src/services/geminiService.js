
// Gemini API Key - Load from environment variable
export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent';

export const sendMessageToGemini = async (message, history = []) => {
    if (!GEMINI_API_KEY) {
        throw new Error('API Key not configured. Please check your .env file and restart the dev server.');
    }

    try {
        // Format history for Gemini API
        const contents = history.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
        }));

        // Add current message
        contents.push({
            role: 'user',
            parts: [{ text: message }]
        });

        const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: contents,
                systemInstruction: {
                    parts: [{
                        text: "You are a helpful AI assistant for Cassini, a premium infinite whiteboard application. You help users with drawing, design, creative tasks, and general questions. Be concise, friendly, and format your responses in markdown for better readability. Use code blocks for technical examples, bullet points for lists, and proper formatting for clarity."
                    }]
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Failed to fetch response from Gemini');
        }

        const data = await response.json();

        if (data.candidates && data.candidates.length > 0) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('No response generated');
        }
    } catch (error) {
        console.error('Gemini API Error:', error);
        throw error;
    }
};

export const getAvailableModels = async () => {
    if (!GEMINI_API_KEY) {
        return ['API Key not configured'];
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`);
        const data = await response.json();

        if (data.models) {
            return data.models
                .filter(m => m.supportedGenerationMethods.includes('generateContent'))
                .map(m => m.name.replace('models/', ''));
        }
        return ['No models found'];
    } catch (error) {
        return [`Error listing models: ${error.message}`];
    }
};
