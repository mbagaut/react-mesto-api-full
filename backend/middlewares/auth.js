const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');

module.exports = (req, res, next) => {
// const { jwt: token } = req.cookies;
  const { authorization } = req.headers;
  console.log(authorization);

  // if (!token) {
  // throw new UnauthorizedError('Вы не авторизованы');
  // }

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Вы не авторизованы');
  }
  const token = authorization.replace('Bearer ', '');

  let payload;
  const { JWT_SECRET = 'dev-secret' } = process.env;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  req.user = payload;
  next();
};
