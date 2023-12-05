const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/index.html");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

// Usando nodemon para detectar cambios en tu aplicación y BrowserSync para recargar el navegador

const browserSync = require("browser-sync");
const nodemon = require("nodemon");

nodemon({
  script: "index.js", // Cambia 'app.js' por el nombre de tu archivo principal
  ext: "js html css", // Extensiones a observar por nodemon
  ignore: ["node_modules/"], // Carpetas a ignorar por nodemon
}).on("restart", () => {
  // Cuando nodemon reinicie la aplicación, actualiza el navegador con BrowserSync
  browserSync.reload();
});

// Inicializa BrowserSync para refrescar el navegador automáticamente
browserSync.init({
  proxy: "http://localhost:3000", // Apunta a tu servidor Express
  files: ["public/**/*.*"], // Archivos a observar por cambios
  port: 5000, // Puerto para BrowserSync
  notify: false, // Desactiva las notificaciones del navegador
  open: false, // No abrir automáticamente el navegador al iniciar BrowserSync
});
