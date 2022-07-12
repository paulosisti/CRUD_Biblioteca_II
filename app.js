const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaLivros = require('./routes/livros.js');
const rotaAutores = require('./routes/autores.js');
const rotaClientes = require('./routes/clientes.js');
const rotaFuncionarios = require('./routes/funcionarios.js');
const rotaEmprestimos = require('./routes/emprestimos.js');
const rotaLogin = require('./routes/login.js');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // * = Todos
  res.header('Acess-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).send({});
  }

  next();
});

app.use('/livros', rotaLivros);
app.use('/autores', rotaAutores);
app.use('/clientes', rotaClientes);
app.use('/funcionarios', rotaFuncionarios);
app.use('/emprestimos', rotaEmprestimos);
app.use('/login', rotaLogin)

// quando não encontra a rota
app.use((req, res, next) => {
  const erro = new Error('Rota não encontrada');
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message
    }
  });
});


module.exports = app;