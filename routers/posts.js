const express = require("express");
const router = express.Router();

// richiesta dati
router.get("/", (req, res) => {
    res.send("rischiesta dati a postArray")
})

// rischiesta dati con id specifico
router.get("/:id", (req, res) => {
    res.send("rischiesta dati a postArray di un id specifico " + req.params.id)
})

// creazione nuovo post
router.post("/", (req, res) => {
    res.send("creazione nuvo post")
})

// modifica integrale 
router.put("/:id", (req, res) => {
    res.send("modifica integrale post " + req.params.id)
})

// modifica parziale
router.patch("/:id", (req, res) => {
    res.send("modifica parziale post " + req.params.id)
})

// eliminazione
router.delete("/:id", (req, res) => {
    res.send("cancellazione post " + req.params.id)
})

module.exports = router;