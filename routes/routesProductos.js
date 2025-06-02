import express from "express";
import {
    deleteProducto,
    findProducto,
    listProductos,
    saveProducto,
    updateImagenProducto,
    updateProducto,
    findProdutoByNombre
} from "../controllers/ProductoController.js";
import upload from "../middlewares/MulterImgProducto.js";
import protegerRuta from "../middlewares/ProtegerRuta.js";

const router = express.Router();

router.get("/", protegerRuta, listProductos);
router.post("/producto", protegerRuta, saveProducto);
router.post("/actualizar-img/:id", protegerRuta, upload.single("imagen"), updateImagenProducto);
router.get("/producto/:id", protegerRuta, findProducto);
router.post("/producto/busqueda", protegerRuta, findProdutoByNombre);
router.put("/producto/:id", protegerRuta, updateProducto);
router.delete("/producto/:id", protegerRuta, deleteProducto);

export default router;