import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Configuracion de opciones
const opciones = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

//Conexion
mongoose.connect(process.env.URI_DATABASE, opciones).then(() => {
    console.log("Conexion correcta a base de datos local de mongo db")
}).catch((err) => {
    console.log("Error en conexion a base de datos local de mongo db");
    console.log("Error: " + err);
});

//Exportacion de la conexion
export default mongoose;