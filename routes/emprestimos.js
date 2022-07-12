const express = require('express');
const router = express.Router();

const emprestimoController = require('../controller/emprestimos_controller.js');

router.get('/listar', emprestimoController.listar);
router.get('/:id', emprestimoController.buscarPorId);
router.post('/inserir', emprestimoController.inserir);
router.put('/atualizar/:id', emprestimoController.atualizar);
router.delete('/deletar/:id', emprestimoController.deletar);

module.exports = router;