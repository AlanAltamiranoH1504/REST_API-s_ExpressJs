import mongoose from "mongoose";
const {Schema, model} = mongoose;

const clientesSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        trim: true
    },
    empresa: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true
    },
    telefono: {
        type: String,
        trim: true
    }
});

const Cliente = mongoose.model("Clientes", clientesSchema);
export default Cliente;