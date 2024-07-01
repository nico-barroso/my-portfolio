import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
      console.log("Contiene");
    }
    changeText();
    changeColor();
    changeColorButton();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const changeColor = () => {
  const mailIcon = document.querySelector(".mail-icon");
  mailIcon.classList.toggle("invert");
};

export const changeColorButton = () => {
  const btns = document.querySelectorAll(".my-btn");
  btns.forEach((btn) => {
    btn.classList.toggle("my-btn-dark");
  });
};

export const Navbar = () => `
<nav>
<h2>@NickBarroso</h2>
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
