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
    const container = document.querySelectorAll(".projects-container figure");
    const videos = document.querySelectorAll("video"); // Select all video elements

    console.log(container);
    container.forEach((element, index) => {
      console.log(element);
      console.log(index);
      const video = videos[index]; // Get the corresponding video for this element

      element.addEventListener("mouseover", () => {
        video.play();
      });

      element.addEventListener("mouseout", () => {
        video.pause();
        video.currentTime = 0;
      });
    });
  }

  projectHover();
  const footer = document.querySelector("footer");
  footer.innerHTML = "";
};
