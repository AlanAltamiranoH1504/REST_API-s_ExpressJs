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
import protegerRuta from "../middlewares/ProtegerRuta.js";

// router.get("/", prueba);
router.get("/", protegerRuta, listePedidos);
router.post("/", protegerRuta, savePedido);
router.get("/:id", protegerRuta, findById);
router.put("/:id", protegerRuta, updatePedido);
router.delete("/:id", protegerRuta, deletePedido);

export default router;