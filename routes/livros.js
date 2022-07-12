const express = require('express');
const router = express.Router();

const livroController = require('../controller/livros_controller.js');
const rotaLogin = require('../middleware/auth.js');

router.get('/listar', livroController.listar);
router.get('/nome/:nome', livroController.buscarPorNome);
router.get('/id/:id', livroController.buscarPorId);
router.get('/status/:status', livroController.buscarPorStatus);
router.post('/inserir', rotaLogin.verifyJWT, livroController.inserir);
router.put('/atualizar/:id', rotaLogin.verifyJWT, livroController.atualizar);
router.delete('/deletar/:id', rotaLogin.verifyJWT, livroController.deletar);

module.exports = router;