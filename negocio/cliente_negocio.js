const clienteRepositorio = require('../persistencia/crud_clientes.js')

function inserir(cliente, callback) {
  if (!cliente || !cliente.nome || !cliente.telefone || !cliente.matricula) {
    const erro = {
      mensagem: "Todos os campos devem sem preenchidos!"
    };
    callback(erro, undefined)
  }
  else {
    clienteRepositorio.inserir(cliente, callback);
  }
}

function listar(callback) {
  clienteRepositorio.listar(callback);
}

function buscarPorNome(nome, callback) {
  if (!nome || nome.length === 0) {
    const erro = {
      mensagem: "Parâmetro nome está vazio!"
    }
    callback(erro, undefined);
  }
  else {
    clienteRepositorio.buscarPorNome(nome, callback);
  }
}

function atualizar(cliente, id, callback) {
  if (!id || isNaN(id)) {
    const erro = {
      mensagem: "ID Invalido!"
    }
    callback(erro, undefined);
  }
  else if (!cliente || !cliente.nome || !cliente.telefone || !cliente.matricula) {
    const erro = {
      mensagem: "Todos os campos devem sem preenchidos!"
    };
    callback(erro, undefined)
  }
  else {
    clienteRepositorio.atualizar(cliente, id, callback);
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
    clienteRepositorio.deletar(id, callback);
  }
}

module.exports = {
  inserir, listar, buscarPorNome, atualizar, deletar
}

