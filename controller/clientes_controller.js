const clienteNegocio = require('../negocio/cliente_negocio')

exports.inserir = (req, res, next) => {
  const bodyCliente = req.body;
  clienteNegocio.inserir(bodyCliente, (err, clienteInserido) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(201).json(clienteInserido)
    }
  })
};

exports.listar = (req, res, next) => {
  clienteNegocio.listar((err, livros) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(livros)
    }
  })
};

exports.buscarPorNome = (req, res, next) => {
  const nomeCliente = req.params.nome
  clienteNegocio.buscarPorNome(nomeCliente, (err, clientesEncontrados) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(clientesEncontrados)
    }
  })
};

exports.atualizar = (req, res) => {
  const bodyCliente = req.body;
  const id = req.params.id;
  clienteNegocio.atualizar(bodyCliente, id, (err, clienteAtualizado) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(200).json(clienteAtualizado)
    }
  })
};

exports.deletar = (req, res) => {
  const id = req.params.id;
  clienteNegocio.deletar(id, (err, clienteDeletado) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(200).json(clienteDeletado)
    }
  })
};