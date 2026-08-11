# 🖼️ Glassmorphism Interactive Image Gallery

A responsive, high-performance web-based **Image Gallery** built with **HTML5, CSS3, and JavaScript (ES6+)**. Styled with a Glassmorphism theme, this project features dynamic category filtering, responsive grid layouts, hover micro-interactions, lazy loading, and an interactive full-screen Lightbox modal with keyboard controls.

---

## ✨ Features

- **🏷️ Dynamic Category Filtering**: Filter images instantly by category (*All*, *Nature*, *Architecture*, *Technology*) without page reloads.
- **🔍 Full-Screen Lightbox Preview**: Click any image to view it in an immersive, full-screen modal preview.
- **↔️ Lightbox Navigation**: Navigate back and forth between filtered images directly inside the modal using screen controls or keyboard arrows.
- **⌨️ Keyboard Accessibility**: Full keyboard support allowing quick navigation using `ArrowRight`, `ArrowLeft`, and modal closing via `Escape`.
- **💎 Glassmorphism Design**: Features translucent frosted-glass panels (`backdrop-filter: blur`), dark linear gradient backgrounds, and glowing ambient background orbs.
- **📱 Fully Responsive Grid**: Uses CSS Grid (`auto-fill`, `minmax`) to smoothly re-layout images across mobile, tablet, and desktop screens.

---

Deploment : https://akshithaanagireddy.github.io/Image_Gallery/

---

## 📁 File Structure

```text
image-gallery/
│
├── index.html   # Gallery layout, filter container & Lightbox modal DOM
├── style.css    # Glassmorphic styles, grid rules, animations & Lightbox overlay
└── script.js    # Dataset state, filter logic, Lightbox controls & keyboard event listeners
