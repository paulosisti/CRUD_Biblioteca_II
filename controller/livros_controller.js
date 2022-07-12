const livroNegocio = require('../negocio/livro_negocio')

exports.inserir = (req, res, next) => {
  const livro = req.body;
  livroNegocio.inserir(livro, (err, livroInserido) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(201).json(livroInserido)
    }
  })
};

exports.listar = (req, res, next) => {
  livroNegocio.listar((err, livros) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(livros)
    }
  })
};

exports.buscarPorNome = (req, res, next) => {
  const livro = req.params.nome
  livroNegocio.buscarPorNome(livro, (err, livros) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(livros)
    }
  })
};

exports.buscarPorId = (req, res, next) => {
  const livro = req.params.id
  livroNegocio.buscarPorId(livro, (err, livros) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(livros)
    }
  })
};

exports.buscarPorStatus = (req, res, next) => {
  const livro = req.params.status
  livroNegocio.buscarPorStatus(livro, (err, livros) => {
    if (err) {
      res.json({ "erro": err })
    }
    else {
      res.json(livros)
    }
  })
};

exports.atualizar = (req, res) => {
  const livro = req.body;
  const id = req.params.id;
  livroNegocio.atualizar(livro, id, (err, livroAtualizado) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(200).json(livroAtualizado)
    }
  })
};

exports.deletar = (req, res) => {
  const id = req.params.id;
  livroNegocio.deletar(id, (err, livroDeletado) => {
    if (err) {
      res.status(500).json({ erro: err })
    } else {
      res.status(200).json(livroDeletado)
    }
  })
};