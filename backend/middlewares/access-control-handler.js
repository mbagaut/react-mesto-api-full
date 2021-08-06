const ALLOWED_CORS = [
  'https://mesto.maratb.nomoredomains.monster',
  'http://mesto.maratb.nomoredomains.monster'
];

const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

module.exports.corsOptions = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;

  if (ALLOWED_CORS.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);

    if (method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
      res.header('Access-Control-Allow-Headers', 'Origin, Content-Type');

      res.status(204).send();
    } else {
      next();
    }
  } else {
    next();
  }
};


//module.exports.corsOptions = {
//  credentials: true,
//  origin: function checkCorsList(origin, callback) {
//    if (ALLOWED_CORS.indexOf(origin) !== -1 || !origin) {
//      callback(null, true);
//    } else {
//     callback(new Error('Not allowed by CORS'));
//    }
//  },
//};
