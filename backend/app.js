require('dotenv').config();

const express = require('express');
const cors = require('cors');
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { errors, celebrate, Joi } = require('celebrate');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const { createUser, login } = require('./controllers/users');
const сorsOptions = require('./middlewares/access-control-handler');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const BadRequestError = require('./errors/bad-request-error');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Достигнут лимит запросов с вашего IP, повторите попытку позже',
});

// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use('/', express.json()); // встроенный парсер express
// app.use(сorsOptions); // обработка CORS
app.use(helmet()); // настройка заголовков http для защиты от веб-уязвимостей
app.use(limiter);

app.use(cors(сorsOptions));
app.use(requestLogger); // подключаем логгер запросов до всех обработчиков

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);
app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(new RegExp(/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/)),
    about: Joi.string().min(2).max(30),
  }),
}), createUser);

app.use(cookieParser());
app.use(auth);

app.use('/', userRouter);
app.use('/', cardRouter);

app.use((req, res, next) => {
  next(new BadRequestError('Ресурс не найден'));
});

app.use(errorLogger); // подключаем логгер ошибок после всех обработчиков
console.log(`Тут работает`);
// обработчик ошибок celebrate
app.use(errors());
// централизованный обработчик
app.use((err, req, res, next) => {
  console.log(`Всё что есть`);
  if (err.statusCode) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    res.status(500).send({ message: 'Ошибка сервера' });
  }
});

module.exports = app;
