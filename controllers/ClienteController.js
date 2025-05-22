import Cliente from "../models/Cliente.js";

const pruebaControladorClientes = (req, res) => {
    try {
        return res.status(200).json({
            msg: "Funcionando el controlador de clientes"
        });
    } catch (e) {
        return res.status(500).json({
            error: e.message
        })
    }
}

const listClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find({});
        return res.status(200).json(clientes);
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const saveCliente = async (req, res) => {
    try {
        const {nombre, apellidos, empresa, email, telefono} = req.body;
        const newCliente = await Cliente.create({
            nombre,
            apellidos,
            empresa,
            email,
            telefono,
        });
        return res.status(201).json({
            msg: "Cliente agregado correctamente"
        });
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const findCliente = async (req, res) => {
    const id = req.params.id;
    try {
        const foundCliente = await Cliente.findById(id);
        if (!foundCliente) {
            return res.status(404).json({
                msg: "Cliente no encontrado"
            });
        }

        return res.status(200).json(foundCliente);
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const updateCliente = async (req, res) => {
    const id = req.params.id;
    const {nombre, apellidos, empresa, email, telefono} = req.body;
    try {
        const cliente = await Cliente.findById(id);
        cliente.nombre = nombre !== null ? nombre : cliente.nombre;
        cliente.apellidos = apellidos !== null ? apellidos : cliente.apellidos;
        cliente.empresa = empresa !== null ? empresa : cliente.empresa;
        cliente.email = email !== null ? email : cliente.empresa;
        cliente.telefono = telefono !== null ? telefono : cliente.telefono;

        await cliente.save();

        return res.status(200).json({
            msg: "Cliente actualizado correctamente"
        });
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

const deleteCliente = async (req, res) => {
    const id = req.params.id;
    try {
        const cliente = await Cliente.findById(id);
        if (!cliente) {
            return res.status(404).json({
                msg: "Cliente no encontrado"
            });
        }

        await Cliente.findByIdAndDelete(id);
        return res.status(200).json({
            msg: "Cliente eliminado correctamente"
        });
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}

export {
    pruebaControladorClientes,
    listClientes,
    findCliente,
    saveCliente,
    updateCliente,
    deleteCliente,
}