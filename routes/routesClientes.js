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
router.get("/cliente/:id", findCliente);
router.post("/cliente", saveCliente);
router.put("/cliente/:id", updateCliente);
router.delete("/cliente/:id", deleteCliente);

export default router;