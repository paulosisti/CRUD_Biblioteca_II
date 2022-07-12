const express = require('express');
const router = express.Router();

const autorController = require('../controller/autores_controller.js');

router.get('/listar', autorController.listar);
router.post('/inserir', autorController.inserir);
router.get('/:nome', autorController.buscarPorNome);
router.put('/atualizar/:id', autorController.atualizar);
router.delete('/deletar/:id', autorController.deletar);

module.exports = router;