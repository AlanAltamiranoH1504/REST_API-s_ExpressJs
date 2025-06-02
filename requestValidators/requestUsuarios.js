import {body} from "express-validator";

const requestSaveUsuario = [
    body("nombre")
        .exists({checkNull: true, checkFalsy: true}).withMessage("El nombre de usuario es obligatorio"),
    body("apellidos")
        .exists({checkNull: true, checkFalsy: true}).withMessage("Los apellidos del usuario son obligatorios"),
    body("email")
        .exists({checkNull: true, checkFalsy: true}).withMessage("El email del usuario es obligatorio")
        .isEmail().withMessage("El email de debe tener el formato correcto"),
    body("password")
        .exists({checkNull: true, checkFalsy: true}).withMessage("El password es obligatoria")
        .isLength({min: 5}).withMessage("El password debe tener al menos 5 caracteres")
];

export {
    requestSaveUsuario
}