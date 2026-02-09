const express = require("express");
const router = express.Router();
// import postControllers
const postControllers = require("./../controllers/postControllers")

// index
router.get("/", postControllers.index)

// show
router.get("/:id", postControllers.show)

// store
router.post("/", postControllers.store)

// modify
router.put("/:id", postControllers.modify)

// upgrade
router.patch("/:id", postControllers.upgrade)

// destroy
router.delete("/:id", postControllers.destroy)

module.exports = router;