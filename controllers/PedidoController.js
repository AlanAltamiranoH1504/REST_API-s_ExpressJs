import Pedido from "../models/Pedido.js";
import Cliente from "../models/Cliente.js";
import Producto from "../models/Producto.js";

const prueba = (req, res) => {
    return res.status(200).json({
        msg: "Funcionando controlador de pedidos"
    });
}

const listePedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find()
            .populate({path: "cliente", select: "id nombre apellidos"})
            .populate({path: "productos.producto", select: "nombre precio"});

        return res.status(200).json(pedidos);
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const savePedido = async (req, res) => {
    const {cliente, productos, total} = req.body;
    try {
        const nuevoPedido = await Pedido.create({
            cliente: cliente,
            productos: productos,
            total: total,
        });
        return res.status(201).json({
            msg: "Pedido guardado de manera correcta"
        });
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const findById = async (req, res) => {
    try {
        const {id} = req.params;
        const pedido = await Pedido.findById(id)
            .populate({path: "cliente", select: "id nombre apellidos"})
            .populate({path: "productos.producto", select: "nombre precio"});

        return res.status(200).json(pedido);
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const updatePedido = async (req, res) => {
    const {id} = req.params;

    try {
        const {cliente, productos, total} = req.body;
        const pedidoPorActualizar = await Pedido.findById(id);
        if (!pedidoPorActualizar) {
            return res.status(404).json({
                error: "Pedido no encontrado"
            });
        }

        pedidoPorActualizar.productos = productos;
        pedidoPorActualizar.total = total;
        await pedidoPorActualizar.save();

        return res.status(200).json({
            msg: "Pedido actualizado de manera correcta"
        });
    }catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const deletePedido = async (req, res) => {
    const {id} = req.params;

    try {
        const pedidoPorEliminar = await Pedido.findById(id);
        if (!pedidoPorEliminar) {
            return res.status(400).json({
                error: "Pedido no encontrado"
            });
        }

        await Pedido.findByIdAndDelete(id);
        return res.status(200).json({
            msg: "Pedido eliminado de manera correcta"
        });
    }catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

export {
    prueba,
    listePedidos,
    savePedido,
    findById,
    updatePedido,
    deletePedido
}