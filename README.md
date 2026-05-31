# Y2K Photo Booth 📸✨

A real-time photobooth web app using live chroma keying to create immersive virtual backgrounds for parties, fashion events, and interactive installations.

Designed for setups with a real green screen and physical props like balloons, decorations, and accessories.

---

# Features

### 🎥 Real-Time Camera Preview

Live webcam feed with instant background compositing.

### 🟩 Green Screen Chroma Keying

Professional-style chroma key removal for stable and accurate subject extraction.

Works with:

* balloons
* props
* decorations
* multiple people
* layered scenes

### 🎨 Themed Virtual Backgrounds

Switch between immersive Y2K-inspired scenes and environments in real time.

### ⏱️ 3-Second Capture Timer

Countdown before taking photos.

### 📸 High-Quality Image Export

Capture and download composited photos directly from the browser.

### 🖼️ Photo Gallery

Preview and save previously captured shots.

### ✨ Y2K Interface

Glassmorphism UI, neon gradients, retro internet aesthetics, and webcam-era nostalgia.

---

# Tech Stack

* React 18 — UI framework
* Vite — Development environment & bundler
* WebGL / Canvas API — Real-time chroma key compositing
* Tailwind CSS — Styling system

---

# How It Works

The app removes the green screen using color-based keying for reliable extraction of people and physical objects.

This pure chroma key pipeline is a solid foundation for future edge refinement and optical effects.

---

# Recommended Setup

For best results:

* Use a bright, evenly lit green screen
* Keep subjects ~1–2 meters away from the backdrop
* Avoid green clothing or props
* Light the subject separately from the background

---

# Future Ideas

* Animated backgrounds
* VHS / CRT filters
* Multiplayer capture mode
* Depth-based effects
* GIF & video export
* AI-generated environments
* Virtual accessories & overlays


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
``` 

### Production / built preview

```bash
npm run build
npm run server
```

Or run both steps together:

```bash
npm start
```
