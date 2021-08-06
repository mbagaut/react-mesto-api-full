const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');

module.exports = (req, res, next) => {
  const { jwt: token } = req.cookies;

  console.log(req.cookies);
  console.log(req.headers);

  if (!token) {
    throw new UnauthorizedError('Вы не авторизованы');
  }
  let payload;
  const { JWT_SECRET = 'dev-secret' } = process.env;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedError('Необходима авторизация');
  }
  req.user = payload;
  console.log(payload);
  next();
};
