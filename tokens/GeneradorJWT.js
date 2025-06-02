import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generadorJWT = (emailUsuario, usuarioNombre, usuarioId) => {
    const token = jwt.sign({
        email: emailUsuario,
        nombre: usuarioNombre,
        _id: usuarioId
    }, process.env.JWT_KEY_SECRET, {
        expiresIn: "5h",
        // httpOnly: true,
    });
    return token;
}

export {
    generadorJWT
}