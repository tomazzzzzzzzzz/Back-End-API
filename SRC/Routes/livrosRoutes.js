const express = require("express");
const connection = require ('../Config/db');
const router = express.Router();
const livrosController = require("../Controllers/livrosController");

router.get("/", livrosController.buscarTodos);

router.get("/:id", livrosController.buscarPorId);

router.post("/", livrosController.adicionarLivro);

router.put("/:id", livrosController.atualizarLivro);

router.delete("/:id", livrosController.deletarLivro);

module.exports = router; 
