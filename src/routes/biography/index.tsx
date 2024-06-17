// src/routes/biography/index.tsx
import { component$ } from '@builder.io/qwik';
import '../../styles/biography.scss';


export default component$(() => {
  return (
    <div className="biography">
      <div className="bio-header">
        <h1>Henri Matisse</h1>
        <p>A Master of Modern Art</p>
      </div>
      <div className="bio-content">
        <div className="bio-image">
          <img src="/path/to/matisse-portrait.jpg" alt="Henri Matisse" />
        </div>
        <div className="bio-text">
          <p>Henri Matisse was a French artist known for his use of color and his fluid and original draughtsmanship. He was a draughtsman, printmaker, and sculptor, but is known primarily as a painter. Matisse is commonly regarded, along with Picasso and Marcel Duchamp, as one of the three artists who helped to define the revolutionary developments in the plastic arts in the opening decades of the twentieth century, responsible for significant developments in painting and sculpture.</p>
          <p>Matisse was born in 1869 in Le Cateau-Cambrésis, France, and began painting at age 21. He developed a unique style characterized by vibrant colors and bold forms. Throughout his career, Matisse explored various artistic mediums and styles, constantly evolving and pushing the boundaries of art. He continued to create art until his death in 1954.</p>
          <p>Notable works include "Woman with a Hat," "The Dance," and "Red Room (Harmony in Red)." Matisse's legacy continues to influence contemporary artists and his works are celebrated worldwide.</p>
        </div>
      </div>
    </div>
  );
});