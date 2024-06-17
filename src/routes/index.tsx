import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import "../styles/main.scss";
import Landing from "~/components/Landing";

export default component$(() => {
  return (
    <>
      <HeroSection />
      <Landing/>
      
    </>
  );
});

export const head: DocumentHead = {
  title: "Henri Matisse",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
