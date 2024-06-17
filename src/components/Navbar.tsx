// src/components/Navbar.tsx
import { component$ } from '@builder.io/qwik';
import '../styles/nav.scss'

export default component$(() => {
  return (
     <div class="navbar">
    <div class="nav-items">
      <img src="https://seeklogo.com/images/H/henry-matisse-edificio-logo-0C96B5D80C-seeklogo.com.png"
      class="matisse-logo"
      />
      <a href="/" class="nav-item logo">Matisse</a>
      <a href="/" class="nav-item active">Home</a>
      <a href="/biography" class="nav-item">Biography</a>
      <a href="/gallery" class="nav-item">Gallery</a>
      <a href="/others" class="nav-item">Others</a>
    </div>
  </div>
  );
});
