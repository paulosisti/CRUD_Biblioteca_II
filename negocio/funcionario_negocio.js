const funcionarioRepositorio = require('../persistencia/crud_funcionarios.js');

function inserir(funcionario, callback) {
  if (!funcionario || !funcionario.nome || !funcionario.usuario || !funcionario.senha) {
    const erro = {
      mensagem: "Todos os campos devem sem preenchidos!"
    };
    callback(erro, undefined)
  }
  else {
    funcionarioRepositorio.inserir(funcionario, callback);
  }
}

function listar(callback) {
  funcionarioRepositorio.listar(callback);
}

function buscarPorNome(nome, callback) {
  if (!nome || nome.length === 0) {
    const erro = {
      mensagem: "Parâmetro nome está vazio!"
    }
    callback(erro, undefined);
  }
  else {
    funcionarioRepositorio.buscarPorNome(nome, callback);
  }
}

function buscarPorUsername(username, callback) {
  if (!usuario) {
    const erro = {
      mensagem: "Parâmetro usuário está vazio!"
    }
    callback(erro, undefined);
  }
  else {
    funcionarioRepositorio.buscarPorUsername(username, callback);
  }
}

function atualizar(funcionario, id, callback) {
  if (!id || isNaN(id)) {
    const erro = {
      mensagem: "ID Invalido!"
    }
    callback(erro, undefined);
  }
  else if (!funcionario || !funcionario.nome || !funcionario.usuario || !funcionario.senha) {
    const erro = {
      mensagem: "Todos os campos devem sem preenchidos!"
    };
    callback(erro, undefined)
  }
  else {
    funcionarioRepositorio.atualizar(funcionario, id, callback);
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
    funcionarioRepositorio.deletar(id, callback);
  }
}


module.exports = {
  inserir, listar, buscarPorNome, atualizar, deletar, buscarPorUsername
}

