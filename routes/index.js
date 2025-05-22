import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Aplicacion de REST API's funcionando");
});

router.get("/nosotros", (req, res) => {
    res.send("Nosotros");
})

export default router;