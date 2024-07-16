import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      if (document.body.classList.contains("light")) {
        console.log("Contiene");
      }
      changeText();
      changeColor();
      changeColorButton();
    });
  }
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn) {
    themeBtn.innerText = themeBtn.innerText === "☀" ? "☾" : "☀";
  }
};

export const changeColor = () => {
  const mailIcon = document.querySelector(".mail-icon");
  const projectIcons = document.querySelectorAll(".project-card .icons"); // Adjust the selector as needed
  const projectVideos = document.querySelectorAll(
    ".project-card .media-container video"
  );
  if (mailIcon) {
    mailIcon.classList.toggle("invert");
  }
  projectIcons.forEach((icon) => {
    icon.classList.toggle("invert");
  });

  projectVideos.forEach((video) => {
    video.classList.toggle("shadow");
  });
};

export const changeColorButton = () => {
  const btns = document.querySelectorAll(".my-btn");
  btns.forEach((btn) => {
    btn.classList.toggle("my-btn-dark");
  });
};

export const navExpand = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector("#icono");
    const nav = document.querySelector("nav");

    burger.addEventListener("click", () => {
      nav.classList.toggle("menu-desplegado");
      console.log("clicked");
    });
  });
};

// Initialize functions
changeTheme();
// navExpand();

export const Navbar = () => `
<nav>
<h2>@nico-barroso</h2>

<ul>
    <li>
        <a href="#" id="homelink">Inicio</a>
    </li>
    <li>
        <a href="#" id="projectslink">Proyectos</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
</ul>
</nav>
`;
