const winston = require('winston');
const expressWinston = require('express-winston');

const options = {
  filename: '',
}

// логгер запросов
const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({
      ...options, filename: 'request.log',
    }),
  ],
  format: winston.format.json(),
});

// логгер ошибок
const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({
      ...options, filename: 'error.log',
    }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLogger,
  errorLogger,
};
