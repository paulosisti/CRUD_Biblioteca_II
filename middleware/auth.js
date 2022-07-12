const jwt = require('jsonwebtoken');
const SECRET = 'sisti'

exports.getToken = (req, res, next) => {
  const usuario = req.body
  if (usuario.usuario === 'Paulo' && usuario.senha === '1234') {
    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 600 })
    return res.json({ auth: 'Autenticado com sucesso', token: token });
  } else {
    res.status(401).send({ mensagem: 'Usuário ou Senha incorretos' });
  }
}

exports.verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token']
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ mensagem: 'Falha na autenticação' });
    }
    else {
      req.userId = decoded.userId;
      next();
    }
  })
}