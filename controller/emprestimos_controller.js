const emprestimoNegocio = require('../negocio/emprestimo_negocio')

exports.inserir = (req, res, next) => {
  const emprestimo = req.body;
  emprestimoNegocio.inserir(emprestimo, (err, emprestimoInserido) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(201).json(emprestimoInserido)
    }
  })
};

exports.listar = (req, res, next) => {
  emprestimoNegocio.listar((err, emprestimos) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(emprestimos)
    }
  })
};

exports.buscarPorId = (req, res, next) => {
  const emprestimo = req.params.id;
  emprestimoNegocio.buscarPorId(emprestimo, (err, emprestimos) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(emprestimos)
    }
  })
};

exports.atualizar = (req, res) => {
  const emprestimo = req.body;
  const id = req.params.id;
  emprestimoNegocio.atualizar(emprestimo, id, (err, emprestimoAtualizado) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(200).json(emprestimoAtualizado)
    }
  })
};

exports.deletar = (req, res) => {
  const id = req.params.id;
  emprestimoNegocio.deletar(id, (err, emprestimoDeletado) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(200).json(emprestimoDeletado)
    }
  })
};