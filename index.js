/**
 * CREACION DE API's REST CON EXPRESS
 * Alan Altamirano Hernandez
 * 22 de Mayo de 2025
 */

import express from "express";
import routes from "./routes/index.js";

//Levantamiento del servidor
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log("Aplicacion corriendo en el puerto: " + port);
});

// Definicion de rutas
app.use("/", routes);
