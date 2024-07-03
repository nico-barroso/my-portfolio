import "./Projects.css";
import { cleanPage } from "../../utils/cleanPage";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Divider } from "../../components/Divider/Divider";

export const Projects = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="projects">
      <h2>Proyectos principales</h2>
      ${Divider()}
      <div class="projects-container"></div>
    </section>`;

  const container = document.querySelector(".projects-container");

  for (const project of projects) {
    const figure = document.createElement("figure");
    figure.innerHTML = ProjectCard(project);
    container.appendChild(figure);
  }

  function projectHover() {
    const figures = container.querySelectorAll("figure");
    const videos = container.querySelectorAll("video");

    figures.forEach((figure, index) => {
      const video = videos[index];

      figure.addEventListener("mouseover", () => {
        video.play();
      });

      figure.addEventListener("mouseout", () => {
        video.pause();
        video.currentTime = 0;
      });
    });
  }

  projectHover();

  const footer = document.querySelector("footer");
  footer.innerHTML = "";

  // Llamar a colorChange para aplicar el filtro si es necesario
  colorChange();
};

export const colorChange = () => {
  console.log("Current body class list:", document.body.classList);
  const figures = document.querySelectorAll(".projects-container figure");

  if (figures.length === 0) {
    console.log(
      "No se encontraron elementos <figure> dentro de .projects-container"
    );
    return;
  }

  if (document.body.classList.contains("light")) {
    console.log("Si");
    figures.forEach((figure) => {
      figure.classList.toggle("filter-none");
    });
  }
};
