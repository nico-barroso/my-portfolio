import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `


<div>
${Button("/assets/github-mark.svg", "GitHub", "https://github.com/NickBarroso")}
${Button(
  "./assets/LI-In-Bug.png",
  "LinkedIn",
  "https://linkedin.com/in/nico-barroso"
)}
</div>
`;
