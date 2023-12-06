document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme");
  const icono_tema = document.getElementById("img-icono");

  themeButton.addEventListener("click", () => {
    var projectImages = document.querySelectorAll(".project-image");
    var tecnologies = document.querySelectorAll(".tecnologia");
    var cajas_proyecto = document.querySelectorAll(".more-caja");

    if (document.documentElement.getAttribute("data-theme") == "halloween") {
      icono_tema.src = "../svg/sunny.svg";
      document.documentElement.setAttribute("data-theme", "lemonade");

      projectImages.forEach((element) => {
        element.classList.remove("project-image-dark");
        element.classList.add("project-image-white");
      });

      tecnologies.forEach((element) => {
        element.classList.add("dark");
      });
      cajas_proyecto.forEach((element) => {
        element.classList.add("white");
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
      icono_tema.src = "../svg/moon.svg";
      document.documentElement.setAttribute("data-theme", "halloween");

      projectImages.forEach((element) => {
        element.classList.remove("project-image-white");
        element.classList.add("project-image-dark");
      });

      tecnologies.forEach((element) => {
        element.classList.remove("dark");
      });
      cajas_proyecto.forEach((element) => {
        element.classList.remove("white");
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

document.addEventListener("DOMContentLoaded", function () {
  const enlaces = document.querySelectorAll("a");

  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

      const url = enlace.href;
      setTimeout(function () {
        window.open(url, "_blank"); // Abrir enlace en una nueva pestaña después del retraso
      }, 350); // 350 milisegundos de retraso
    });
  });
});
// Mostrar la flecha al llegar al tope de la página
window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  var scrollHeight = document.documentElement.scrollHeight;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight - 150) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// Hacer scroll hacia arriba al hacer clic en la flecha
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
