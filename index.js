/**
 * CREACION DE API's REST CON EXPRESS
 * Alan Altamirano Hernandez
 * 22 de Mayo de 2025
 */
import express from "express";
import routes from "./routes/index.js";
import conexion from "./config/db.js";
import dotenv from "dotenv";
import routesClientes from "./routes/routesClientes.js";
dotenv.config();

//Levantamiento del servidor
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Aplicacion corriendo en el puerto: " + port);
});

//Habilitacion de peticiones json y de formularios
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Definicion de rutas
app.use("/", routes);
app.use("/clientes", routesClientes);
