const express = require('express');
const router = express.Router();

const funcionarioController = require('../controller/funcionarios_controller.js');

router.get('/listar', funcionarioController.listar);
router.get('/:nome', funcionarioController.buscarPorNome);
router.get('/:usuario', funcionarioController.buscarPorUsuario);
router.post('/inserir', funcionarioController.inserir);
router.put('/atualizar/:id', funcionarioController.atualizar);
router.delete('/deletar/:id', funcionarioController.deletar);

module.exports = router;