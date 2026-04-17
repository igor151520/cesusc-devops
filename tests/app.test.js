const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('deve retornar mensagem de sucesso', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('API funcionando 🚀');
  });
});