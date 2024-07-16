import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
  <div class="media-container">
    <img id="img-${project.id}" src="${project.image}" alt="${
  project.title
}" style="display: none;"/>
    <video id="video-${
      project.id
    }" muted autoplay loop playsinline webkit-playsinline class="shadow">
      <source src="${project.videoImg}" type="video/mp4">
    </video>
  </div>
  <div class="header">
    <h2>${project.title}</h2>
    <div class="icons invert">
      <a href="${project.github}">
        <img src="/icons/github-icon.jpg" alt="GitHub Icon" />
      </a>
      <a href="${project.link}">
        <img src="/icons/link-icon.jpg" alt="Link icon" />
      </a>
    </div>
  </div>
  <div class="detail">
    <p>${project.description}</p>
    <p class="tech">${project.tech.join(" - ")}</p>
  </div>
</div>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video-${project.id}");
    const img = document.getElementById("img-${project.id}");
    
    // Intenta reproducir el video
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // El video se está reproduciendo automáticamente
          console.log("El video se está reproduciendo automáticamente");
        })
        .catch(error => {
          // El video no se está reproduciendo automáticamente, muestra la imagen
          console.error("El video no se está reproduciendo automáticamente:", error);
          img.style.display = "block";
          video.style.display = "none";
        });
    }
  });
</script>
`;
