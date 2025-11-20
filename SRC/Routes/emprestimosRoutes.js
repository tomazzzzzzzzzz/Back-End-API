const express = require('express');
const connection = require ('../Config/db');
const router = express.Router();
const emprestimosController = require("../Controllers/emprestimosController");

router.get("/", emprestimosController.buscarTodos);
router.get("/:id", emprestimosController.buscarPorId);
router.post("/", emprestimosController.criarEmprestimo);
router.put("/:id", emprestimosController.atualizarEmprestimo)
router.delete("/:id", emprestimosController.deletarEmprestimo);
module.exports = router; 