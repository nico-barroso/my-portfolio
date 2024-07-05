import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola, soy</p>
    <h1>Nico Barroso</h1>
<p>Soy un desarrollador de software en España, especializado en el diseño y desarrollo de productos. Me apasiona crear productos interactivos que mejoren la vida de las personas o cuenten historias. He trabajado en diversos proyectos de comunicación y consumo desde la universidad, adquiriendo un amplio conocimiento en mi campo. Actualmente, estoy perfeccionando mis habilidades con un técnico en desarrollo de aplicaciones y una especialización en Full-Stack.</p>   
    <a href="mailto:josenicolasbarrosogarcia@gmail.com"><img class="mail-icon" src="./public/assets/mail-svgrepo-com.svg" alt="Icono de correo">¡No te olvides de decir hola! →</a>
<video autoplay loop muted>
    <source src="public/assets/PruebaPatoHVEC-1.mov" type="video/mp4"/> 
</video>
    </section>`;
  const footer = document.querySelector("footer");
  footer.innerHTML = Footer();
};
