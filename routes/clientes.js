const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clientes_controller.js');

router.get('/listar', clienteController.listar);
router.get('/:nome', clienteController.buscarPorNome);
router.post('/inserir', clienteController.inserir);
router.put('/atualizar/:id', clienteController.atualizar);
router.delete('/deletar/:id', clienteController.deletar);

module.exports = router;