import i18next from "i18next";

const langButton = document.getElementById("lang");
const idiomaText = document.querySelector(".idioma");

langButton.addEventListener("click", () => {
  let subtitulo = document.querySelector(".subtitulo");
  let education = document.querySelector("#education");
  let projects = document.querySelector("#projects");
  let contact = document.querySelector("#contact");
  let mail = document.querySelector("#mail");
  let campus = document.querySelector("#campus");
  let web_1 = document.querySelector("#web-1");
  let web_2 = document.querySelector("#web-2");
  let bach = document.querySelector("#bach");
  let p_pokeshop = document.querySelector("#p-pokeshop");
  let p_dubo = document.querySelector("#p-dubo");
  let portfolio = document.querySelector("#portfolio");
  let p_portfolio = document.querySelector("#p-portfolio");
  let p_solocr = document.querySelector("#p-solocr");
  let lang = idiomaText.textContent === "ES" ? "en" : "es";
  document.documentElement.setAttribute("lang", lang);

  const elements = [
    { element: subtitulo, key: "subtitulo" },
    { element: education, key: "education" },
    { element: projects, key: "projects" },
    { element: contact, key: "contact" },
    { element: mail, key: "mail" },
    { element: campus, key: "campus" },
    { element: web_1, key: "web_1" },
    { element: web_2, key: "web_2" },
    { element: bach, key: "bach" },
    { element: p_pokeshop, key: "p_pokeshop" },
    { element: p_dubo, key: "p_dubo" },
    { element: portfolio, key: "portfolio" },
    { element: p_portfolio, key: "p_portfolio" },
    { element: p_solocr, key: "p_solocr" },
  ];

  elements.forEach((item) => {
    item.element.innerHTML = i18next.t(item.key, { lng: lang });
  });

  idiomaText.textContent = lang === "es" ? "ES" : "EN";
});

i18next.init({
  lng: "es",
  debug: true,
  resources: {
    es: {
      translation: {
        subtitulo:
          "Desarrollador de software que disfruta el proceso de aprendizaje y creación de aplicaciones.",
        education: "Educación",
        projects: "Proyectos",
        contact: "Contacto",
        mail: "Email",
        campus: "Desarrollo de Aplicaciones Web",
        web_1:
          "&#x2022; Desarrolle mis conocimientos en el desarrollo web relacionandome con mis primeros lenguajes de programación como fueron Java, Python y PHP.",
        web_2:
          "&#x2022; Aprendí a utilizar herramientas como Git, GitHub, y diseñar interfaces accesibles y flexibles con HTML5, SCSS y distintos FrameWorks de CSS3.",
        bach: "Bachillerato de Ciencias",
        p_pokeshop: "Tu tienda de Pokémon favorita, consumiendo la Poké API.",
        p_dubo:
          "Escuela de artes marciales, mejorada usando OAuth 2.0 y PassPort JS.",
        portfolio: "Portafolio Web",
        p_portfolio:
          "Mi Portfolio Web, donde muestro mis proyectos y mi información.",
        p_solocr: "Tarifas para un gimnasio.",
      },
    },
    en: {
      translation: {
        subtitulo:
          "Software Developer enjoying the process of learning and creating apps.",
        education: "Education",
        projects: "Projects",
        contact: "Contact",
        mail: "Email",
        campus: "Web Applications Development",
        web_1:
          "&#x2022; Develop my knowledge in web development relating to my first programming languages ​​like Java, Python and PHP.",
        web_2:
          "&#x2022; I learned to use tools like Git, GitHub, and design accessible and flexible interfaces with HTML5, SCSS and different CSS3 FrameWorks.",
        bach: "Bachelor of Science",
        p_pokeshop: "Your favorite Pokemon store, consuming the Poké API.",
        p_dubo:
          "Martial arts school, enhanced using OAuth 2.0 and PassPort JS.",
        portfolio: "Web Portfolio",
        p_portfolio:
          "My Web Portfolio, where I show my projects and my information.",
        p_solocr: "Rates for a gym.",
      },
    },
  },
});
