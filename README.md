# Dahong Luo — Portfolio Website

Personal portfolio website showcasing work in machine learning, audio processing, signal processing, computer vision, research, and software engineering.

🌐 **Live Website**: [https://dappon4.github.io/dahong-portfolio/](https://dappon4.github.io/dahong-portfolio/)

## Overview

A lightweight, responsive static web portfolio built with semantic HTML5, CSS3, and modern vanilla JavaScript.

### Sections
- **Projects**: Core engineering and ML projects
- **Research**: Research publications and focus areas
- **Experience**: Industry and academic experience
- **Education**: Horizontal timeline, skills, and interests

## Tech Stack

- **HTML5**: Semantic and accessible markup
- **CSS3**: Responsive design with CSS variables and flex/grid layouts
- **JavaScript (ES6+)**: Looping carousels and textured SVG artwork
- **Hosting**: GitHub Pages

### Local checks

Serve locally with `python3 -m http.server 8765 --bind 127.0.0.1`.
With Playwright and Chromium available in the Node environment, run
`node tests/carousels.cjs` to check detail dialogs, preserved bullet points,
responsive layout, keyboard focus, carousel resuming, pause controls, and reduced motion.
Run `node --check app.js` for JavaScript syntax.
Run `node tests/contact.cjs` to check the single-line email and compact contact layout.
