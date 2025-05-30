import { log } from "console";
import Producto from "../models/Producto.js";
import {unlink} from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

// Configuración para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const listProductos = async (req, res) => {
    try {
        const productos = await Producto.find();

        return res.status(200).json(productos);
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const saveProducto = async (req, res) => {
    try {
        const {nombre, precio} = req.body;
        const saveProducto = await Producto.create({
            nombre,
            precio,
        });
        return res.status(201).json({
            msg: "Producto agregado correctamente"
        });
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const updateImagenProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const imagen = req.file.filename;

        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).json({
                msg: "Producto no encontrado"
            });
        }

        if (producto.imagen) {
            const nombreImagen = producto.imagen;
            const rutaImagen = path.join(__dirname, "../public/uploads/imgProductos", nombreImagen);
            await unlink(rutaImagen);
            console.log("IMAGEN ANTIGUA ELIMINADA")
        }

        producto.imagen = imagen;
        await producto.save();

        return res.status(200).json({
            msg: "Producto actualizado con imagen"
        })
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const findProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        return res.status(200).json(producto)
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}


const findProdutoByNombre = async (req, res) => {
    const {productoBuscar} = req.body;
    try {
        const productos = await Producto.find({
            nombre: {$regex: productoBuscar, $options: "i"}
        });

        if(productos.length === 0) {
            return res.status(404).json({
                error: "Producto no existente"
            });
        }
        return res.status(200).json(productos);
    }catch(e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const updateProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const {nombre, precio} = req.body;
        const produco = await Producto.findByIdAndUpdate(id, {
            nombre, precio,
        });

        return res.status(200).json({
            msg: "Producto actualizado correctamente"
        })
    } catch (e) {
        return res.status(500).json({
            error: e.message
        })
    }
}

const deleteProducto = async (req, res) => {
    const id = req.params.id;
    try {
        const imgProducto = await Producto.findById(id);
        if (!imgProducto) {
            return res.status(404).json({
                msg: "Producto no encontrado"
            });
        }

        //Eliminacion de img y producto
        if (imgProducto.imagen) {
            const nombreImagen = imgProducto.imagen;
            const rutaImagen = path.join(__dirname, "../public/uploads/imgProductos", nombreImagen);
            await unlink(rutaImagen);
        }
        const producto = await Producto.findByIdAndDelete(id);
        return res.status(200).json({
            msg: "Producto eliminado correctamente"
        })
    }catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

export {
    listProductos,
    saveProducto,
    updateImagenProducto,
    findProducto,
    updateProducto,
    deleteProducto,
    findProdutoByNombre
}