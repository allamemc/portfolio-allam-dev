document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme");
  const icono_tema = document.getElementById("theme-icon");

  themeButton.addEventListener("click", () => {
    var projectImages = document.querySelectorAll(".project-image");

    if (document.documentElement.getAttribute("data-theme") == "halloween") {
      document.documentElement.setAttribute("data-theme", "lemonade");
      icono_tema.setAttribute("name", "sunny");

      projectImages.forEach((element) => {
        element.classList.remove("project-image-dark");
        element.classList.add("project-image-white");
      });

      document
        .querySelector("#poke_image")
        .setAttribute("src", "../images/poke_white.webp");
      document
        .querySelector("#dubo_image")
        .setAttribute("src", "../images/dubo_white.webp");
      document
        .querySelector("#allam_image")
        .setAttribute("src", "../images/allam_white.webp");
    } else {
      document.documentElement.setAttribute("data-theme", "halloween");
      icono_tema.setAttribute("name", "moon");

      projectImages.forEach((element) => {
        element.classList.remove("project-image-white");
        element.classList.add("project-image-dark");
      });

      document
        .querySelector("#poke_image")
        .setAttribute("src", "../images/poke_dark.webp");
      document
        .querySelector("#dubo_image")
        .setAttribute("src", "../images/dubo_dark.webp");
      document
        .querySelector("#allam_image")
        .setAttribute("src", "../images/allam_black.webp");
    }
  });
});

// FILEPATH: /c:/Users/Campus FP/Downloads/portfolio-allam/public/js/script.js

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    });
  });
});
