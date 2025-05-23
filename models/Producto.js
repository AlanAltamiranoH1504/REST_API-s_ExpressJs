import mongoose from "mongoose";
const {Schema} = mongoose;

const productosSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
    },
    imagen: {
        type: String
    }
});

const Productos = mongoose.model("Productos", productosSchema);
export default Productos;