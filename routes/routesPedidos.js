import express from "express";
import {
    deletePedido,
    findById,
    listePedidos,
    prueba,
    savePedido,
    updatePedido
} from "../controllers/PedidoController.js";
const router = express.Router();

// router.get("/", prueba);
router.get("/", listePedidos);
router.post("/", savePedido);
router.get("/:id", findById);
router.put("/:id", updatePedido);
router.delete("/:id", deletePedido);

export default router;