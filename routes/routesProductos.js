import express from "express";
import {
    deleteProducto,
    findProducto,
    listProductos,
    saveProducto,
    updateImagenProducto,
    updateProducto
} from "../controllers/ProductoController.js";
import upload from "../middlewares/MulterImgProducto.js";
const router = express.Router();

router.get("/", listProductos);
router.post("/producto", saveProducto);
router.post("/actualizar-img/:id", upload.single("imagen"), updateImagenProducto);
router.get("/producto/:id", findProducto);
router.put("/producto/:id", updateProducto);
router.delete("/producto/:id", deleteProducto);

export default router;