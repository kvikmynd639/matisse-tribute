// src/components/HeroSection.tsx
import { component$ } from '@builder.io/qwik';
import '../styles/hero.scss'; // Import your HeroSection styles

export default component$(() => {
  return (
    <section class="hero-section">
      <div class="image-grid">
        <div class="image-wrapper large-image">
          <img 
            src="https://d3d00swyhr67nd.cloudfront.net/w944h944/collection/TATE/TATE/TATE_TATE_T00165_10-001.jpg" 
            alt="Matisse Art 1" 
            width="600" 
            height="497"
          />
        </div>
        <div class="image-wrapper">
          <img 
            src="https://www.singulart.com/blog/wp-content/uploads/2023/08/image-83.png" 
            alt="Matisse Art 2" 
            width="500" 
            height="300" 
          />
        </div>
        <div class="image-wrapper">
          <img 
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/still-life-with-apples-on-a-pink-tablecloth-by-henri-matisse-192-henri-matisse.jpg" 
            alt="Matisse Art 3" 
            width="500" 
            height="300" 
          />
        </div>
        <div class="image-wrapper">
          <img 
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/acanthus-moroccan-landscape-by-henri-matisse-1912-henri-matisse.jpg" 
            alt="Matisse Art 4" 
            width="400" 
            height="300" 
          />
        </div>
        <div class="image-wrapper tall-image">
          <img 
            src="https://www.irishtimes.com/resizer/aGD4-8ejplGdI9kK-ZL1vzGjY4I=/1600x1600/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/UW4TCCUFBHD4AWXFN36V2537JA.jpg" 
            alt="Matisse Art 5" 
            width="400" 
            height="300" 
          />
        </div>
        <div class="image-wrapper">
          <img 
            src="https://i1.wp.com/www.itravelwithart.com/wp-content/uploads/2019/01/5285334997_d6c35e6bdd_b.jpg?fit=676%2C549&ssl=1" 
            alt="Matisse Art 6" 
            width="400" 
            height="300" 
          />
        </div>
      </div>
    </section>
  );
});




