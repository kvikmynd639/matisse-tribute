// src/components/HeroSection.tsx

import { component$} from '@builder.io/qwik';
import '../styles/hero.scss';

export default component$(() => {
  // Sample paintings data (you can replace with your own images)
  const paintings = [
    { imageUrl: 'https://www.singulart.com/blog/wp-content/uploads/2023/08/image-83.png', title: 'Painting 1' },
    { imageUrl: 'https://www.irishtimes.com/resizer/aGD4-8ejplGdI9kK-ZL1vzGjY4I=/1600x1600/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/UW4TCCUFBHD4AWXFN36V2537JA.jpg', title: 'Painting 2' },
    { imageUrl: 'https://cdn.thecollector.com/wp-content/uploads/2019/09/matisse-henri-portrait-raie-verte-painting.jpg?width=1400&quality=55', title: 'Painting 3' },
    { imageUrl: 'https://i.pinimg.com/originals/4a/fa/97/4afa9780f2b6ed685b5667305933d431.jpg', title: 'Painting 4' },
    { imageUrl: 'https://i1.wp.com/www.itravelwithart.com/wp-content/uploads/2019/01/5285334997_d6c35e6bdd_b.jpg?fit=676%2C549&ssl=1', title: 'Painting 5' },
    { imageUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/still-life-with-apples-on-a-pink-tablecloth-by-henri-matisse-192-henri-matisse.jpg', title: 'Painting 6' },
    { imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Henri_Matisse_Self-Portrait_in_a_Striped_T-shirt_%281906%29.jpg/220px-Henri_Matisse_Self-Portrait_in_a_Striped_T-shirt_%281906%29.jpg', title: 'Painting 7' },
    { imageUrl: 'https://i.ebayimg.com/images/g/GEEAAOSwQz1jYoDz/s-l1200.webp', title: 'Painting 8' },
    { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvFEVOLIlB77EjPg51arXeL-CXFik-hDtNQ&s', title: 'Painting 9' },
    { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5YUy3RumLn6t8lYrx9tDoW84tyPkEO454w&s', title: 'Painting 10' },
    { imageUrl: 'https://www.tallengestore.com/cdn/shop/products/Portrait_of_Henri_Matisse_ee89eba8-4d69-4434-ab6f-09f8f58b2818.jpg?v=1569136160', title: 'Painting 11' },
    {imageUrl: 'https://wooarts.com/wp-content/uploads/sites/1/nggallery/henri-matisse-landscape/henri-matisse-landscape-painting-the-luxembourg-gardens.jpg', title:'Painting 12'},
  ];

  const handleClick = (imageUrl: string, title: string) => {
    emit('paintingClicked', { imageUrl, title });
  };

  return (
    <div class="hero-section">
      {paintings.map((painting, index) => (
        <div class="painting" key={index}>
          <img src={painting.imageUrl} alt={painting.title} width="600" height="300"/>
          <div class="overlay">
            <h3>{painting.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
});




