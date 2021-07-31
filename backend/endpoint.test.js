const supertest = require('supertest');
const app = require('./app');

const request = supertest(app);

describe('Эндпоинты откликаются на запросы', () => {
  it('Возвращает 401-й ответ по запросу к "/" при отстутствии авторизации', () => (
    request.get('/')
      .then((response) => {
        expect(response.status).toBe(401);
      })
  ));
});
