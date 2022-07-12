const autorRepositorio = require('../persistencia/crud_autores.js')

function inserir(autor, callback) {
  if (!autor || !autor.nome || !autor.pais) {
    const erro = {
      mensagem: "Todos os campos devem sem preenchidos!"
    };
    callback(erro, undefined)
  }
  else {
    autorRepositorio.inserir(autor, callback);
  }
}

function listar(callback) {
  autorRepositorio.listar(callback);
}

function buscarPorNome(nome, callback) {
  if (!nome || nome.length === 0) {
    const erro = {
      mensagem: "Parâmetro nome está vazio!"
    }
    callback(erro, undefined);
  }
  else {
    autorRepositorio.buscarPorNome(nome, callback);
  }
}

function atualizar(autor, id, callback) {
  if (!id || isNaN(id)) {
    const erro = {
      mensagem: "ID Invalido!"
    }
    callback(erro, undefined);
  }
  else if (!autor || !autor.nome || !autor.pais) {
    const erro = {
      mensagem: "Todos os campos devem sem preenchidos!"
    };
    callback(erro, undefined)
  }
  else {
    autorRepositorio.atualizar(autor, id, callback);
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
    autorRepositorio.deletar(id, callback);
  }
}

module.exports = {
  inserir, listar, buscarPorNome, atualizar, deletar
}

