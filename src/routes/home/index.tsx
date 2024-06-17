// src/routes/home/index.tsx
import { component$ } from '@builder.io/qwik';
import HeroSection from '../../components/HeroSection';

export default component$(() => {
  return (
    <div>
      <HeroSection />
    </div>
  );
});
