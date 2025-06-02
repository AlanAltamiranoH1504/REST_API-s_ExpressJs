import express from "express";
import {
    deleteCliente,
    findCliente,
    listClientes,
    pruebaControladorClientes,
    saveCliente,
    updateCliente
} from "../controllers/ClienteController.js";
import protegerRuta from "../middlewares/ProtegerRuta.js";

const router = express.Router();

router.get("/prueba", pruebaControladorClientes);
router.get("/", protegerRuta, listClientes);
router.get("/cliente/:id", protegerRuta, findCliente);
router.post("/cliente", protegerRuta, saveCliente);
router.put("/cliente/:id", protegerRuta, updateCliente);
router.delete("/cliente/:id", protegerRuta, deleteCliente);

export default router;