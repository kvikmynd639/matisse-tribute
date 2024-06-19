// src/components/Footer/Footer.tsx

import { component$ } from '@builder.io/qwik';
import '../styles/footer.scss';

export default component$(() => {
  return (
    <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h2 class="footer-title">About Us</h2>
        <p class="footer-text">We create beautiful art-inspired designs that are both modern and timeless.</p>
      </div>
      <div class="footer-section">
        <h2 class="footer-title">Contact</h2>
        <p class="footer-text">Email: info@artdesign.com</p>
        <p class="footer-text">Phone: +123 456 7890</p>
      </div>
      <div class="footer-section">
        <h2 class="footer-title">Follow Us</h2>
        <div class="footer-icons">
          <a href="#" class="footer-icon-link"><i class="icon icon-facebook"></i></a>
          <a href="#" class="footer-icon-link"><i class="icon icon-twitter"></i></a>
          <a href="#" class="footer-icon-link"><i class="icon icon-instagram"></i></a>
        </div>
      </div>
    </div>
  </footer>
  );
});
