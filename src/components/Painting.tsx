// src/components/Painting.tsx

import { component$, emit } from '@builder.io/qwik';
import './Painting.scss';

interface PaintingProps {
  painting: {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
  };
}

export default component$<PaintingProps>(({ painting }) => {
  const handleClick = () => {
    emit('paintingClicked', { painting });
  };

  return (
    <div class="painting" onClick={handleClick}>
      <img src={painting.imageUrl} alt={painting.title} />
    </div>
  );
});
