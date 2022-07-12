const livroRepositorio = require('../persistencia/crud_livros.js')

function inserir(livro, callback) {
  if (!livro || !livro.isbn || !livro.nome || !livro.autor || !livro.ano || !livro.editora || !livro.status) {
    const erro = {
      mensagem: "Todos os campos devem sem preenchidos!"
    };
    callback(erro, undefined)
  }
  else {
    livroRepositorio.inserir(livro, callback);
  }
}

function listar(callback) {
  livroRepositorio.listar(callback);
}

function buscarPorId(id, callback) {
  if (!id || isNaN(id)) {
    const erro = {
      mensagem: "ID Invalido!"
    }
    callback(erro, undefined);
  }
  else {
    livroRepositorio.buscarPorId(id, callback);
  }
}

function buscarPorNome(nome, callback) {
  if (!nome || nome.length === 0) {
    const erro = {
      mensagem: "Parâmetro nome está vazio!"
    }
    callback(erro, undefined);
  }
  else {
    livroRepositorio.buscarPorNome(nome, callback);
  }
}

function buscarPorStatus(status, callback) {
  if (!status || status != "Disponível" && status != "Indisponível") {
    const erro = {
      mensagem: "Parâmetro de status inválido!"
    }
    callback(erro, undefined);
  }
  else {
    livroRepositorio.buscarPorStatus(status, callback);
  }
}

function atualizar(livro, id, callback) {
  if (!id || isNaN(id)) {
    const erro = {
      mensagem: "ID Invalido!"
    }
    callback(erro, undefined);
  }
  else if (!livro || !livro.isbn || !livro.nome || !livro.autor || !livro.ano || !livro.editora || !livro.status) {
    const erro = {
      mensagem: "Todos os campos devem sem preenchidos!"
    };
    callback(erro, undefined)
  }
  else {
    livroRepositorio.atualizar(livro, id, callback);
  }
}

function deletar(id, callback) {
  if (!id || isNaN(id)) {
    const erro = {
      mensagem: "ID Invalido!"
    }
    callback(erro, undefined);
  }
  else {
    livroRepositorio.deletar(id, callback);
  }
}

module.exports = {
  inserir, listar, buscarPorId, buscarPorNome, buscarPorStatus, atualizar, deletar
}

