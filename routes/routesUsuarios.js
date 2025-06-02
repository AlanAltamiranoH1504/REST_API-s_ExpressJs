import express from "express";
import {autenticarUsuario, prueba, saveUsuaro} from "../controllers/UsuarioController.js";
import {requestAutenticacionUsuario, requestSaveUsuario} from "../requestValidators/requestUsuarios.js";
const router = express.Router();

router.get("/prueba", prueba);
router.post("/save", requestSaveUsuario, saveUsuaro);
router.post("/autenticacion", requestAutenticacionUsuario, autenticarUsuario);

export default router;