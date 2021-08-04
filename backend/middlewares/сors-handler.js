// Массив доменов, с которых разрешены кросс-доменные запросы
const allowedCors = [
  'https://mesto.maratb.nomoredomains.monster',
  'https://api.mesto.maratb.nomoredomains.monster',
  'http://mesto.maratb.nomoredomains.monster',
  'http://api.mesto.maratb.nomoredomains.monster',
];

// Значение для заголовка Access-Control-Allow-Methods по умолчанию (разрешены все типы запросов)
const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

app.use(function(req, res, next) {
  // Сохраняем источник запроса в переменную origin
  const { origin } = req.headers;

  // Тип запроса (HTTP-метод)
  const { method } = req;

  // Список заголовков исходного запроса
  const requestHeaders = req.headers['access-control-request-headers'];

  // Проверяем, что источник запроса есть среди разрешённых
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  // Если это предварительный запрос, добавляем нужные заголовки
  if (method === 'OPTIONS') {
    // разрешаем кросс-доменные запросы любых типов (по умолчанию)
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    // разрешаем кросс-доменные запросы с этими заголовками
    res.header('Access-Control-Allow-Headers', requestHeaders);
    // завершаем обработку запроса и возвращаем результат клиенту
    return res.end();
  }
  next();
});
