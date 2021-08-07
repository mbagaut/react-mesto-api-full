const ALLOWED_CORS = [
  'https://mesto.maratb.nomoredomains.monster',
  'http://mesto.maratb.nomoredomains.monster'
];

//const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

//module.exports.corsOptions = (req, res, next) => {
//  const { origin } = req.headers;
//  const { method } = req;

//  if (ALLOWED_CORS.includes(origin)) {
//    res.header('Access-Control-Allow-Origin', origin);
//    res.header('Access-Control-Allow-Credentials', true);

//    if (method === 'OPTIONS') {
//      res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
//      res.header('Access-Control-Allow-Headers', 'Origin, Content-Type');

//      res.status(204).send();
//    } else {
//      next();
//    }
//  } else {
//    next();
//  }
//};


// Значение для заголовка Access-Control-Allow-Methods по умолчанию (разрешены все типы запросов)
 const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

 module.exports.corsOptions = (req, res, next) => {
  // Сохраняем источник запроса в переменную origin
  const { origin } = req.headers;

  // Тип запроса (HTTP-метод)
  const { method } = req;

  // Список заголовков исходного запроса
  const requestHeaders = req.headers['access-control-request-headers'];

  // Проверяем, что источник запроса есть среди разрешённых
  if (ALLOWED_CORS.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Domain', '.mesto.maratb.nomoredomains.monster');
  }
  // Если это предварительный запрос, добавляем нужные заголовки
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Credentials', true)
    // разрешаем кросс-доменные запросы любых типов (по умолчанию)
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    // разрешаем кросс-доменные запросы с этими заголовками
    res.header('Access-Control-Allow-Headers', requestHeaders);
    // завершаем обработку запроса и возвращаем результат клиенту
     return res.end();
 }
  next();
};


//module.exports.corsOptions = {
//  credentials: true,
//  origin: function checkCorsList(origin, callback) {
 //   if (ALLOWED_CORS.indexOf(origin) !== -1 || !origin) {
 //     callback(null, true);
  //  } else {
  //   callback(new Error('Not allowed by CORS'));
  //  }
  //},
//};
