const emprestimoRepositorio = require('../persistencia/crud_emprestimo.js')

function inserir(emprestimo, callback) {
  if (!emprestimo || !emprestimo.idCliente || !emprestimo.idLivro) {
    const erro = {
      mensagem: "Os campos idCliente ou idLivro estão vazios!"
    };
    callback(erro, undefined)
  }
  else {
    emprestimoRepositorio.inserir(emprestimo, callback);
  }
}

function listar(callback) {
  emprestimoRepositorio.listar(callback);
}

function buscarPorId(id, callback) {
  if (!id || isNaN(id)) {
    const erro = {
      mensagem: "ID Invalido!"
    }
    callback(erro, undefined);
  }
  else {
    emprestimoRepositorio.buscarPorId(id, callback);
  }
}

function atualizar(emprestimo, id, callback) {
  if (!id || isNaN(id)) {
    const erro = {
      mensagem: "ID Invalido!"
    }
    callback(erro, undefined);
  }
  else if (!emprestimo || !emprestimo.idCliente || !emprestimo.idLivro || !emprestimo.dataEmprestimo || !emprestimo.dataDevolucao) {
    const erro = {
      mensagem: "Todos os campos devem sem preenchidos!"
    };
    callback(erro, undefined)
  }
  else {
    emprestimoRepositorio.atualizar(emprestimo, id, callback);
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
    emprestimoRepositorio.deletar(id, callback);
  }
}

module.exports = {
  inserir, listar, buscarPorId, atualizar, deletar
}

