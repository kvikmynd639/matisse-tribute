import { component$ } from '@builder.io/qwik';
import '../../styles/gallery.scss';

const artworks = [
  {
    title: 'The Snail',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTsM5zvIg2z2gNE4ld722xwlfQ_WtNWOqSQ&s',
    description: 'The Snail is an example of Matisse\'s cut-out technique, where he used painted paper and scissors to create shapes.',
  },
  {
    title: 'The Dance',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Matissedance.jpg',
    description: 'The Dance showcases Matisse\'s use of vibrant colors and bold, sweeping lines to create dynamic compositions.',
  },
  {
    title: 'Woman with a Hat',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXX1V3iXaEQTgoXB7sc7hzc5ccwZlyvEsFg&s',
    description: 'This painting is an example of Fauvism, characterized by its vivid colors and expressive brushwork.',
  },
  {
    title: 'Blue Nude',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwwgE0c_dOkpLTP-9WMNND2CsCHcXZ8Witw&s',
    description: 'Blue Nude is part of Matisse\'s cut-out series, featuring simplified shapes and a striking use of blue.',
  },
  {
    title: 'La Gerbe',
    image: 'https://uploads6.wikiart.org/images/henri-matisse/la-gerbe-1953.jpg',
    description: 'La Gerbe is a large ceramic mural made using the cut-out technique, emphasizing organic forms and bold colors.',
  },
  {
    title: 'The Red Studio',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Atelier_rouge_matisse_1.jpg/300px-Atelier_rouge_matisse_1.jpg',
    description: 'The Red Studio highlights Matisse\'s use of perspective and color to depict his studio filled with artworks.',
  },
  {
    title: 'Icarus',
    image: 'https://d7hftxdivxxvm.cloudfront.net/?height=801&quality=1&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FpRoZcaMrwnY_c98OOCNZzA%2Fsmall.jpg&width=801',
    description: 'Icarus is another cut-out piece, illustrating the myth of Icarus with a minimalist approach and vibrant colors.',
  },
  {
    title: 'Jazz',
    image: 'https://arches-papers.com/wp-content/uploads/2022/04/Matisse-01-1600x960.jpg',
    description: 'Jazz is a series of paper cut-outs that Matisse created late in his life, combining bright colors with dynamic forms.',
  },
];

export default component$(() => {
  return (
    <div class="gallery">
      <h2>Gallery</h2>
      <p>Explore some of the most famous works of Henri Matisse.</p>
      <div class="gallery-grid">
        {artworks.map((artwork) => (
          <div class="gallery-item" key={artwork.title}>
            <img src={artwork.image} alt={artwork.title} class="gallery-image" width="300" height="200" />
            <h3 class="gallery-title">{artwork.title}</h3>
            <p class="gallery-description">{artwork.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
});
