const funcionarioNegocio = require('../negocio/funcionario_negocio');

exports.inserir = (req, res, next) => {
  const funcionario = req.body;
  funcionarioNegocio.inserir(funcionario, (err, funcionarioInserido) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(201).json(funcionarioInserido)
    }
  })
};

exports.listar = (req, res, next) => {
  funcionarioNegocio.listar((err, funcionarios) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(funcionarios)
    }
  })
};

exports.buscarPorNome = (req, res, next) => {
  const funcionario = req.params.nome
  funcionarioNegocio.buscarPorNome(funcionario, (err, funcionarios) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(funcionarios)
    }
  })
};

exports.buscarPorUsuario = (req, res, next) => {
  const funcionario = req.params.usuario
  funcionarioNegocio.buscarPorUsuario(funcionario, (err, funcionarios) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(funcionarios)
    }
  })
};

exports.atualizar = (req, res) => {
  const funcionario = req.body;
  const id = req.params.id;
  funcionarioNegocio.atualizar(funcionario, id, (err, funcionarioAtualizado) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(200).json(funcionarioAtualizado)
    }
  })
};

exports.deletar = (req, res) => {
  const id = req.params.id;
  funcionarioNegocio.deletar(id, (err, funcionarioDeletado) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(200).json(funcionarioDeletado)
    }
  })
};