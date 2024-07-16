import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
<div class=media-container>
<video muted loop playsinline webkit-playsinline class="shadow">
  <source src=${project.videoImg} type="video/mp4">
</video>
</div>
<div class="header">
<h2>${project.title}</h2>
<div class="icons invert">
<a href=${project.github}>
<img src="/icons/github-icon.jpg" alt="GitHub Icon" />
</a>
<a href=${project.link}>
<img src="/icons/link-icon.jpg" alt="Link icon" />
</a>
</div>
</div>

<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;
