import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Usuario from "../models/Usuario.js";
import {validationResult} from "express-validator";
dotenv.config();

const prueba = (req, res) => {
    return res.status(200).json({
        msg: "Funcionando controlador de usuarios"
    });
}

const saveUsuaro = async (req, res) => {
    const {nombre, apellidos, email, password} = req.body;

    const errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.status(400).json({
            errores: errores.array()
        });
    }
    try {
        const passwordHash = await bcrypt.hash(password, 12);

        const emailUsado = await Usuario.findOne({email: email});
        if (emailUsado){
            return res.status(400).json({
                error: "El email ya se encuentra en uso"
            });
        }

        const usuario = await Usuario.create({
            nombre,
            apellidos,
            email,
            password: passwordHash,
        });

        return res.status(201).json({
            msg: "Usuario registrado correctamente"
        });
    }catch (e) {
        return res.status(400).json({
            msg: "Ocurrio un error en el registro del usuario",
            error: e.message
        });
    }
}

export {
    prueba,
    saveUsuaro
}