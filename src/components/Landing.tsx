import { component$ } from "@builder.io/qwik";
import '../styles/home.scss';

export default component$(() => {
    return(
        <section class="home">
             <section class="quote-section">
        <blockquote>"Creativity takes courage." - Henri Matisse</blockquote>
      </section>
      <section class="painting-text-section">
        <div class="painting">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyAQ3ig_QhY_AjYIBev_Dyz9F2hDm14fVNMPqS2195eRF5Ln_Eo18eiibrwl8qfj2vCJqBL2wCbE5sjnQdtWfbnqPtjNIZWIAYRFa65V2_oYbqBaYjc-Dg7WhNzQ6VJ_LF_mxKxzkf9Q/w1200-h630-p-k-no-nu/Portrait+a%CC%80+la+raie+verte.jpg"width="600" height="300" alt="La Raie Verte" />
        </div>
        <div class="text">
          <h2>La Raie Verte (The Green Line)</h2>
          <p>
            "La Raie Verte" (The Green Line) is one of Matisse's most famous portraits. It showcases his skillful use of color and form to create a striking image. The painting is a portrait of his wife, Amélie, and is noted for the bold green line that runs down the center of her face.
          </p>
        </div>
      </section>
      <section class="quote-section">
        <blockquote>"There are always flowers for those who want to see them." - Henri Matisse</blockquote>
      </section>
      <section class="about-section red">
        <div class="text">
          <h2>About Henri Matisse</h2>
          <p>
            Henri Matisse was a French artist, known for his use of color and his fluid and original draughtsmanship. As a draughtsman, printmaker, and sculptor, but principally as a painter, Matisse is commonly regarded, along with Pablo Picasso, as one of the artists who best helped to define the revolutionary developments in the visual arts throughout the opening decades of the twentieth century.
          </p>
        </div>
        <div class="image">
          <img src="https://www.redhouseoriginals.com/wp-content/uploads/Mattisse-B-and-W_FINAL.jpg" width="600" height="400" alt="Henri Matisse" />
        </div>
      </section>

      <section class="about-section purple">
        <div class="image">
          <img src="https://i.ebayimg.com/images/g/TgYAAOSwY~1Z64pc/s-l1600.jpg" width="600" height="400" alt="Henri Matisse" />
        </div>
        <div class="text">
          <h2>This is Fauvism</h2>
          <p>
            Henri Matisse was a French artist, known for his use of color and his fluid and original draughtsmanship. As a draughtsman, printmaker, and sculptor, but principally as a painter, Matisse is commonly regarded, along with Pablo Picasso, as one of the artists who best helped to define the revolutionary developments in the visual arts throughout the opening decades of the twentieth century.
          </p>
          

        </div>

      </section>

        </section>
    );
})