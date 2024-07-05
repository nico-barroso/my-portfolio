(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const p=()=>{document.querySelector("#themeBtn").addEventListener("click",()=>{document.body.classList.toggle("light"),document.body.classList.contains("light")&&console.log("Contiene"),h(),g(),f()})},h=()=>{const e=document.querySelector("#themeBtn");e.innerText==="☀"?e.innerText="☾":e.innerText="☀"},g=()=>{const e=document.querySelector(".mail-icon");document.querySelector(""),e.classList.toggle("invert")},f=()=>{document.querySelectorAll(".my-btn").forEach(t=>{t.classList.toggle("my-btn-dark")})},v=()=>`
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
`,l=(e,t)=>{document.querySelector(e).addEventListener("click",()=>t())},a=(e,t,i)=>`
<a class="my-btn" href=${i} target="_blank">
<img src=${e} alt='${t} icon'/>
<h4>${t}</h4>
</a>
`,y=()=>`


<div>
${a("/assets/github-mark.svg","GitHub","https://github.com/nico-barroso")}
${a("./assets/LI-In-Bug.png","LinkedIn","https://linkedin.com/in/nico-barroso")}
</div>
`,d=e=>{e.innerHTML=""},u=()=>{const e=document.querySelector("main");d(e),e.innerHTML=`
    <section class="home">
    <p>Hola, soy</p>
    <h1>Nico Barroso</h1>
<p>Soy un desarrollador de software en España, especializado en el diseño y desarrollo de productos. Me apasiona crear productos interactivos que mejoren la vida de las personas o cuenten historias. He trabajado en diversos proyectos de comunicación y consumo desde la universidad, adquiriendo un amplio conocimiento en mi campo. Actualmente, estoy perfeccionando mis habilidades con un técnico en desarrollo de aplicaciones y una especialización en Full-Stack.</p>   
    <a href="mailto:josenicolasbarrosogarcia@gmail.com"><img class="mail-icon" src="./assets/mail-svgrepo-com.svg" alt="Icono de correo">¡No te olvides de decir hola! →</a>
<video autoplay loop muted>
    <source src="assets/PruebaPatoHVEC-1.mov" type="video/mp4"/> 
</video>
    </section>`;const t=document.querySelector("footer");t.innerHTML=y()},b=[{title:"MNTN - A hiking experience",description:"Esta es la descripción de mi primer proyecto",videoImg:"./assets/project-video/project01.mp4",tech:["HTML5","CSS3"],github:"https://github.com/nico-barroso/entrega-flexbox",link:"https://flexbox-nico.vercel.app"},{title:"Stretchbook",description:"Esta es la descripción de mi primer proyecto",videoImg:"./assets/project-video/project02.mp4",tech:["Diseño UX","Diseño UI","Jetpack Compose","Kotlin"],github:"https://github.com/nico-barroso/entrega-flexbox",link:"https://flexbox-nico.vercel.app"}],L=e=>`
<div class="project-card">
<div class=media-container>
<!--<img src=${e.image} alt=${e.title}/>-->
<video muted loop>
  <source src=${e.videoImg} type="video/mp4">
</video>
</div>
<div class="header">
<h2>${e.title}</h2>
<div class="icons">
<a href=${e.github}>
<img src="/icons/github-icon.jpg" alt="GitHub Icon" />
</a>
<a href=${e.link}>
<img src="/icons/link-icon.jpg" alt="Link icon" />
</a>
</div>
</div>

<div class="detail">
<p>${e.description}</p>
<p class="tech">${e.tech.join(" - ")}</p>
</div>
</div>
`,S=()=>`
<span class="divider"></span>
`,k=()=>{const e=document.querySelector("main");d(e),e.innerHTML=`
    <section class="projects">
      <h2>Proyectos principales</h2>
      ${S()}
      <div class="projects-container"></div>
    </section>`;const t=document.querySelector(".projects-container");for(const o of b){const n=document.createElement("figure");n.innerHTML=L(o),t.appendChild(n)}function i(){const o=t.querySelectorAll("figure"),n=t.querySelectorAll("video");o.forEach((c,m)=>{const r=n[m];c.addEventListener("mouseover",()=>{r.play()}),c.addEventListener("mouseout",()=>{r.pause(),r.currentTime=0})})}i();const s=document.querySelector("footer");s.innerHTML="",q()},q=()=>{console.log("Current body class list:",document.body.classList);const e=document.querySelectorAll(".projects-container figure");if(e.length===0){console.log("No se encontraron elementos <figure> dentro de .projects-container");return}document.body.classList.contains("light")&&(console.log("Si"),e.forEach(t=>{t.classList.toggle("filter-none")}))},j=document.querySelector("header");j.innerHTML=v();l("#homelink",u);l("#projectslink",k);u();p();
