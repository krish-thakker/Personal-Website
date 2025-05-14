# Personal Website

A responsive, modern personal portfolio website built with React, Tailwind CSS, and Typed.js. Showcases sections for **Home**, **About**, **Experience**, **Projects**, **Skills**, and **Contact**, with social links including Email, LinkedIn, GitHub, Instagram, and TikTok.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Customizing](#customizing)  
- [License](#license)  
- [Author](#author)  

---

## Demo

![Homepage screenshot](./screenshot.png)  
*(Replace `screenshot.png` with an actual image of your site in the repo root.)*

---

## Features

- **Hero Section** with animated typing effect (`Typed.js`)  
- **Responsive Navigation** that adapts to mobile and desktop  
- **About Section** with profile image and bio  
- **Experience & Projects** displayed in responsive grids  
- **Skills** cards with icons and descriptions  
- **Footer** with social icons and links  
- **Dark theme** with customizable brand colors  

---

## Tech Stack

- **React** for UI components  
- **Tailwind CSS** for utility-first styling  
- **Typed.js** for typing animation in the hero  
- **FontAwesome** for scalable vector icons  
- **Vite / Create React App** scaffold  
- **GitHub Pages / Netlify / Vercel** for deployment  

---

## Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/krish-thakker/Personal-Website.git
   cd Personal-Website
   ```  
2. **Install dependencies**  
   ```bash
   npm install
   ```  
3. **Start the development server**  
   ```bash
   npm run start
   ```  
4. **Open your browser** at  
   ```
   http://localhost:3000
   ```  

---

## Usage

- Edit your personal details in `src/App.js`.  
- Replace `/public/assets/` images with your own logos and photos.  
- Tweak brand colors in `tailwind.config.js` under the `extend.colors` block.  
- Add or remove sections by modifying the JSX in `src/App.js`.  

---

## Project Structure

```
Personal-Website/
├── public/
│   ├── assets/           # images, logos, icons
│   └── index.html        # base HTML
├── src/
│   ├── index.css         # Tailwind imports & base resets
│   ├── App.js            # main React component
│   └── index.js          # React entrypoint
├── tailwind.config.js    # Tailwind customization
├── postcss.config.js     # PostCSS + autoprefixer
├── package.json
└── README.md
```

---

## Customizing

- **Fonts:** Montserrat is loaded via Google Fonts in `public/index.html`.  
- **Colors:** Adjust `myBlue` and `myGray` in `tailwind.config.js`.  
- **Breakpoints:** Tailwind’s defaults (`sm`, `md`, `lg`, `xl`) power responsive layouts.  

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Author

**Krish Thakker**  
- Email: [kthakker00@gmail.com](mailto:kthakker00@gmail.com)  
- GitHub: [@krish-thakker](https://github.com/krish-thakker)  
- LinkedIn: [krish-thakker](https://linkedin.com/in/krish-thakker)  

> ⭐ Feel free to star the repo if you found it helpful!