// Import necessary styles and assets
import './index.css'; // Imports the main CSS file for styling
import javascriptLogo from './javascript.svg'; // Imports the JavaScript logo SVG
import viteLogo from '/vite.svg'; // Imports the Vite logo SVG
import { setupCounter } from './counter.js'; // Imports the counter setup function from counter.js
import { gsap } from 'gsap'; // Imports the GSAP (GreenSock Animation Platform) library for animations
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Imports the ScrollTrigger plugin for GSAP

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Select the element with id 'app' and set its inner HTML
document.querySelector('#app').innerHTML = `
  <div>
    <!-- Link to Vite website with Vite logo -->
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <!-- Link to JavaScript MDN docs with JavaScript logo -->
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

// Set up the counter functionality on the button with id 'counter'
setupCounter(document.querySelector('#counter'));

// Add smooth scrolling to all anchor links that start with '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth' // Smooth scroll to the target element
    });
  });
});

// GSAP animations for various elements
// These animations will make elements fade in and slide into place

// Animate the main heading
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });

// Animate the subheading with a slight delay
gsap.from(".hero h2", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

// Animate the paragraph text with a longer delay
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 1 });

// Animate the hero image, scaling it up
gsap.from(".hero img", { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });

// Animate buttons, staggering their appearance
gsap.from(".btn", { opacity: 0, y: 20, duration: 0.5, stagger: 0.2, delay: 2 });

// EoF