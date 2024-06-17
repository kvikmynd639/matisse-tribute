// src/components/HeroSection.tsx
import { component$ } from '@builder.io/qwik';
import '../styles/hero.scss'; // Import your HeroSection styles

export default component$(() => {
  return (
     <section class="hero-section">
    <h1>This is the world of Matisse</h1>
    <h3>Period of Fauvism</h3>
    <button class="cta-button">Dive in</button>
    <div class="shape"></div>
  </section>
  );
});
