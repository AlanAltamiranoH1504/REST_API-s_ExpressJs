import express from "express";
import {prueba, saveUsuaro} from "../controllers/UsuarioController.js";
import {requestSaveUsuario} from "../requestValidators/requestUsuarios.js";
const router = express.Router();

router.get("/prueba", prueba);
router.post("/save", requestSaveUsuario, saveUsuaro);

export default router;