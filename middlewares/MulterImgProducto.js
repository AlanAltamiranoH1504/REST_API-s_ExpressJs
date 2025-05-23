import generarId from "../helpers/GeneradorIds.js";
import multer from "multer";
import * as path from "node:path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/imgProductos");
    },

    filename: (req, file, cb) => {
        const nombreArchivo = generarId() + file.originalname;
        cb(null, nombreArchivo);
    }
});

const fileFilter = (req, file, cb) => {
    const permitidos = /jpeg|jpg|png/;
    const extension = permitidos.test(path.extname(file.originalname).toLocaleLowerCase());
    const mime = permitidos.test(file.mimetype);
    if (extension && mime) {
        cb(null, true);
    }else {
        cb(new Error("No es un archivo con extensiones permitidas"));
    }
}

const upload = multer({
    storage: storage,
    limits: {fileSize: 2 * 1024 * 1024},
    fileFilter: fileFilter
});

export default upload;