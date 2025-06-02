import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const protegerRuta = (req, res, next) => {
    //Autorizacion por header
    const authHeader = req.get("Authorization");

    //Verificacion de que existe el header
    if (!authHeader){
        return res.status(401).json({
            error: "No autenticado. No existe el JWT."
        });
    }

    //Obtenemos el token y verificacion
    const token = authHeader.split(" ")[1];
    let revisarToken;
    try {
        revisarToken = jwt.verify(token, process.env.JWT_KEY_SECRET);
    }catch(e) {
        return res.status(500).json({
            error: e.messsage
        });
    }
    //Si el toke el valido pero hay algun error
    if (!revisarToken){
        return res.status(401).json({
            error: "Ocurrio un error en tu autenticacion. Inicia Sesión."
        });
    }

    //Pasa todas la validaciones de token
    next();
};

export default protegerRuta;