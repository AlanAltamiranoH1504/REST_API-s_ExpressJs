import mongoose from "mongoose";
import {Schema} from "mongoose";

const pedidoSchema = new Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Clientes",
        required: true
    },
    productos: [{
        producto: {
            type: Schema.Types.ObjectId,
            ref: "Productos",
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        }
    }],
    total: {
        type: Number,
        required: true
    }
});

const Pedido = mongoose.model("Pedidos", pedidoSchema);
export default Pedido;