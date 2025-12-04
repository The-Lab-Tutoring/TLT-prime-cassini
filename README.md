# Cassini

**Version 1.4.3** - Premium infinite whiteboard with AI assistance, markdown chat, and flexible layouts

## ✨ Features

### Drawing & Creation

- **Pen Tool** - Pressure-sensitive drawing with customizable color, thickness, and opacity
- **Shape Tools** - Rectangle, Circle, Line, and Arrow with fill colors and real-time preview
- **Text Tool** - Insert formatted text with custom fonts and sizes
- **Eraser** - Drag to erase with precision
- **Fill Colors** - Customizable fill color and opacity for shapes (v1.4.1)

### Background & Grid (NEW in v1.4.2)

- **Grid Patterns** - Dots, Lines, or Squares background patterns
- **Custom Grid Size** - Adjustable spacing from 10px to 100px
- **Canvas Background** - 5 preset colors + custom color picker
- **Grid Toggle** - Show/hide grid easily

### Export & Import

- **Export Canvas** - Download as PNG with white background (Ctrl+E)
- **Import Images** - Add images to your whiteboard (Ctrl+I)

### Navigation & Workspace

- **Infinite Canvas** - Unlimited drawing space beyond the viewport
- **Pan & Zoom** - Navigate with Select tool or Ctrl+Scroll
- **Stylus-Only Mode** - Touch pans, stylus/mouse draws
- **Vertical Toolbar** - Toggle horizontal/vertical layout (NEW in v1.4.2)

### Keyboard Shortcuts

- **Tools**: P (Pen), E (Eraser), S/V (Select), R (Rectangle), C (Circle), L (Line), A (Arrow)
- **Undo/Redo**: Ctrl+Z, Ctrl+Y
- **Clipboard**: Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+D (Duplicate), Ctrl+A (Select All) (v1.4.1)

### Measurement Tools

- **Ruler** - Measurement marks with pen snapping
- **Protractor** - Angle measurement from 0° to 180°

### AI Assistant

- **Gemini Chat** - Built-in AI powered by Google Gemini (key required)
- **Markdown Formatting** - Responses with code highlighting (NEW v1.4.3)
- **Custom Instructions** - Configurable AI behavior (NEW v1.4.3)
- **Collapsible Sidebar** - Minimize for maximum drawing space

### Selection & Editing

- **Select Tool** - Click or drag-box selection
- **Multi-Select** - Shift+click for multiple elements
- **Drag to Move** - Immediate element repositioning
- **Selection Indicator** - Shows "{count} selected" (NEW in v1.4.2)
- **Undo/Redo** - Full history support, **except when clearing the whole whiteboard**

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up API key
# 1. Copy .env.example to .env
cp .env.example .env

# 2. Edit .env and add your Gemini API key
# VITE_GEMINI_API_KEY=your_actual_api_key_here

# Run development server
npm run dev

# Build for production
npm run build
```

**Getting a Gemini API Key:**

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env` file

**Note:** Never commit your `.env` file to git. It's already in `.gitignore`.

## 🎨 Design

Apple "Liquid Glass" aesthetic with glassmorphism effects, smooth animations, and premium micro-interactions.

## 🛠️ Tech Stack

- React 18.2.0
- Vite 4.4.5
- HTML5 Canvas
- Lucide React Icons
- Google Gemini API

## 📝 What's New in v1.4.3

- **Markdown Chat Formatting**: AI responses now render with proper markdown including headings, lists, bold, italic, and links
- **Code Syntax Highlighting**: Code blocks in chat with beautiful syntax highlighting  
- **Custom AI Instructions**: Configure system prompt for personalized AI behavior
- **Improved Chat Typography**: Better readability and spacing in conversation

### Recent Updates

**v1.4.2 - Background & Grid:**

- Grid patterns (dots, lines, squares) with adjustable size
- Canvas background colors with color picker
- Selection count indicator  
- Vertical toolbar option
- Logo branding

**v1.4.0 - v1.4.1:**

- Fill colors for shapes (v1.4.1)
- Clipboard operations (v1.4.1)
- Performance improvements (v1.4.0)

[View Full Release Notes →](./RELEASE_NOTES.md)

---

**Built with ❤️ by The Lab Technologies**
