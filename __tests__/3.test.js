const request = require('supertest');

const API = 'http://localhost:3000';

describe('scenarios: getting various errors', () => {
  test('GET request is not a non-existent address, result 404', async () => {
    const result = await request(API).get('/error');
    expect(result.status).toBe(404);
    expect(result.text).toBe('Message: route not found');
  });

  test('request with unsupported method, result 404', async () => {
    const result = await request(API).patch('/person');
    expect(result.status).toBe(404);
    expect(result.text).toBe('Message: you specified the wrong method');
  });

  test('id is not in the database, result 404', async () => {
    const result = await request(API).get('/person/639bba6a-4691-415d-878a-0926b04cd26e');
    expect(result.status).toBe(404);
    expect(result.text).toBe('Message: the id you specified is not in the database');
  });

  test('DELETE request with missing id, result 404', async () => {
    const result = await request(API).delete(`/person/`);

    expect(result.status).toBe(404);
    expect(result.text).toBe('Message: you did not specify id');
  });

  test('GET request for /person, result equals []', async () => {
    const result = await request(API).get('/person');
    expect(result.status).toBe(200);
    expect(result.body).toEqual([]);
  });
});
