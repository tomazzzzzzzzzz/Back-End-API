const express = require('express');
const connection = require ('../Config/db');
const router = express.Router();
const usuarioController = require("../Controllers/usuarioController");

router.get("/", usuarioController.buscarTodos);
router.get("/:id", usuarioController.buscarPorId);
router.post("/", usuarioController.criarUsuario);
router.put("/:id", usuarioController.atualizarUsuario)
router.delete("/:id", usuarioController.deletarUsuario);
module.exports = router; 