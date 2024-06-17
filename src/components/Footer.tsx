// src/components/Footer/Footer.tsx

import { component$ } from '@builder.io/qwik';
import '../styles/footer.scss';

export default component$(() => {
  return (
    <footer class="matisse-footer">
    <div class="footer-background">
      <div class="shape shape1"></div>
      <div class="shape shape2"></div>
      {/*<div class="shape shape3"></div*/}
      {/*<div class="shape shape4"></div>*/}
    </div>
    <div class="footer-content">
      <div class="footer-logo">Matisse Style</div>
      {/*<nav class="footer-nav">
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>*/}
      <div class="footer-info">
        <p>&copy; 2024 Matisse Inspired Art. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
});
