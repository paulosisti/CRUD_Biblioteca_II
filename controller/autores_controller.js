const autorNegocio = require('../negocio/autor_negocio')

exports.inserir = (req, res, next) => {
  const autor = req.body;
  autorNegocio.inserir(autor, (err, autorInserido) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(201).json(autorInserido)
    }
  })
};

exports.listar = (req, res, next) => {
  autorNegocio.listar((err, autores) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(autores)
    }
  })
};

exports.buscarPorNome = (req, res, next) => {
  const autor = req.params.nome
  autorNegocio.buscarPorNome(autor, (err, autores) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(autores)
    }
  })
};

exports.atualizar = (req, res) => {
  const autor = req.body;
  const id = req.params.id;
  autorNegocio.atualizar(autor, id, (err, autorAtualizado) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(200).json(autorAtualizado)
    }
  })
};

exports.deletar = (req, res) => {
  const id = req.params.id;
  autorNegocio.deletar(id, (err, autorDeletado) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(200).json(autorDeletado)
    }
  })
};