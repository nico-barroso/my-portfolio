import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
<div class="footer">
  ${Button(
    "/assets/github-mark.svg",
    "GitHub",
    "https://github.com/nico-barroso"
  )}
  ${Button(
    "./assets/LI-In-Bug.png",
    "LinkedIn",
    "https://linkedin.com/in/nico-barroso"
  )}
</div>
`;