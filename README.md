# Y2K Photo Booth 📸✨

A real-time photo booth web app with AI-powered green screen replacement. Perfect for parties and events!

## Features

- 🎥 **Real-time Video Preview** - Live camera feed with background replacement
- 🤖 **AI Segmentation** - TensorFlow.js powered person detection (no green screen needed, but works great with it!)
- 🎨 **5 Themed Backgrounds** - Beach, Space, Forest, City, Purple Dream
- ⏱️ **3-Second Timer** - Countdown before capture
- 📸 **High-Quality Output** - PNG format with transparent backgrounds
- 🖼️ **Photo Gallery** - View and download all captured photos
- ✨ **Y2K Aesthetic** - Neon colors, glassmorphism design, retro vibes

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **TensorFlow.js** - ML inference
- **@tensorflow-models/selfie-segmentation** - Person segmentation model
- **Tailwind CSS** - Styling
- **Canvas API** - Real-time image processing

## Quick Start

### Prerequisites
- Node.js 16+
- Webcam/USB camera

### Installation

```bash
# Clone repository
git clone https://github.com/Milonade/Y2K-photo-booth.git
cd Y2K-photo-booth

# Install dependencies
npm install

# Start dev server
npm run dev
