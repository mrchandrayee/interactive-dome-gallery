# Interactive Dome Gallery

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/interactive-dome-gallery/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A complete runnable recreation of the uploaded 12-second screen recording.

## What is visible in the video

- Title: **Interactive Dome Gallery**
- Black/navy page background with a bright blue glowing title.
- A thin electric-blue rectangular frame around the main visual.
- A central spherical/dome composition made from oval landscape, ocean, mountain and space photographs.
- The images are arranged around a 3D globe and rotate as a single object.
- A small white caption below the dome reads **Comment "Gallery" for code**.
- A code preview panel is visible beneath the gallery in the recording. Its readable CSS includes a preserve-3d container and an ocean-core radial gradient.

## CSS fragments legible in the video

The video shows the lower portion of the relevant CSS rule. The following readable declarations are transcribed (spacing normalized):

```css
height: var(--size);
transform-style: preserve-3d;
will-change: transform;

/* The Ocean Core */
background: radial-gradient(circle, #1e5799 0%, #000033 80%);
border-radius: 50%;
box-shadow: 0 0 40px rgba(0, 100, 255, 0.3);
```

The complete original HTML/CSS/JavaScript is not visible in the recording. This project recreates the visible 3D gallery behavior with a fresh implementation.

## Run

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Drag the dome left/right/up/down to rotate it.
4. Use the mouse wheel or trackpad scroll over the gallery to zoom in and out.
5. Release after dragging to see the inertial glide.

No build tools or packages are required. The photo panels load from Unsplash URLs, so an internet connection is required to display the photographs.

## Project files

- `index.html` — gallery markup and image panels
- `style.css` — 3D panel positioning, dome styling and responsive layout
- `script.js` — pointer drag, inertia, idle rotation and zoom
- `README.md` — visible code transcription and run instructions

## Source fidelity note

The recording shows the rendered dome and a small portion of CSS, not the full source editor. The visible title, general arrangement, colors and readable CSS declarations are transcribed/recreated. The remaining implementation is a complete working reconstruction, not a byte-for-byte copy of hidden source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
