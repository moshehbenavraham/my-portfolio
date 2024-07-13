# Interactive Portfolio Website Project

## Project Overview
This project aims to create an interactive portfolio website to showcase front-end development skills in HTML, CSS, and JavaScript. The website features a responsive design, smooth scrolling and animations, an interactive project showcase, a contact form with validation, and a dark/light mode toggle.

## Key Features
1. Responsive Design
2. Smooth Scrolling and Animations
3. Interactive Project Showcase
4. Contact Form with Validation
5. Dark/Light Mode Toggle

## Project Structure
```
my-portfolio/
│
├── index.html
├── src/
│   ├── index.css
│   └── main.js
├── public/
│   └── (static assets)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.json
└── .prettierrc
```

## Technology Stack and Tools

### Core Technologies
- HTML5
- CSS3
- JavaScript (ES6+)

### Development Environment
1. **Code Editor**: Visual Studio Code (VS Code)
2. **Version Control**: Git + GitHub
3. **Package Manager**: npm (Node Package Manager)

### Build Tools and Frameworks
4. **Build Tool**: Vite
5. **CSS Framework**: Tailwind CSS
6. **Animation Library**: GSAP (GreenSock Animation Platform)
7. **Form Handling**: Formik + Yup

### Code Quality Tools
8. **Linter**: ESLint
9. **Formatter**: Prettier

### Testing and Optimization
10. **Responsive Design Testing**: Browser DevTools
11. **Performance Optimization**: Lighthouse

## Setup Instructions
1. Install Node.js and npm (if not already installed)
2. Set up the project with Vite:
   ```bash
   npm create vite@latest my-portfolio -- --template vanilla
   cd my-portfolio
   npm install
   ```
3. Install additional dependencies:
   ```bash
   npm install gsap formik yup
   npm install -D tailwindcss postcss autoprefixer eslint prettier eslint-config-prettier eslint-plugin-prettier
   ```
4. Set up Tailwind CSS:
   ```bash
   npx tailwindcss init -p
   ```
   Update tailwind.config.js and create src/index.css with Tailwind directives.
5. Configure ESLint and Prettier (create .eslintrc.json and .prettierrc)
6. Update package.json scripts:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "lint": "eslint src --ext .js",
     "format": "prettier --write \"src/**/*.{js,jsx,css,html}\""
   }
   ```

## Current Status
- Basic project structure set up with Vite
- Initial HTML, CSS, and JavaScript files created
- Git version control initialized with GitHub Desktop

## Next Steps
1. Implement the responsive design using Tailwind CSS
2. Add smooth scrolling and animations with GSAP
3. Create the interactive project showcase
4. Implement the contact form with Formik and Yup
5. Add the dark/light mode toggle functionality
6. Optimize performance and run Lighthouse audits
7. Deploy the website (consider using GitHub Pages or Netlify for free hosting)

## Contributing
This is a personal portfolio project, but suggestions and feedback are welcome. Please open an issue or submit a pull request if you have any improvements to propose.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
Max Gibson aka Mosheh Ben Avraham - Max@ApexWebServices.com

Project Link: https://github.com/moshehbenavraham/my-portfolio


EoF