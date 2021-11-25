const server = require('../src/index');
const request = require('supertest');

const API = 'http://localhost:3000';

describe('scenarios from the task', () => {
  test('GET request for /person, result equals []', async () => {
    const result = await request(API).get('/person');
    expect(result.status).toBe(200);
    expect(result.body).toEqual([]);
  });

  test('POST request for /person, result equals created object', async () => {
    const result = await request(API)
      .post('/person')
      .send({ name: 'test', ege: 1, hobbies: ['hobbies_1'] });
    expect(result.status).toBe(201);
    expect(result.body).toMatchObject({
      name: 'test',
      ege: 1,
      hobbies: ['hobbies_1'],
    });

    id = result.body.id;
  });

  test('GET request for /person/:id, result equals object', async () => {
    const result = await request(API).get(`/person/${id}`);
    expect(result.status).toBe(200);
    expect(result.body).toMatchObject({
      name: 'test',
      ege: 1,
      hobbies: ['hobbies_1'],
      id: `${id}`,
    });
  });

  test('PUT request for /person, result equals updated object', async () => {
    const result = await request(API)
      .put(`/person/${id}`)
      .send({ name: 'test_2', ege: 2, hobbies: ['hobbies_2'] });

    expect(result.status).toBe(200);
    expect(result.body).toMatchObject({
      name: 'test_2',
      ege: 2,
      hobbies: ['hobbies_2'],
      id: `${id}`,
    });
  });

  test('DELETE request for /person, result equals updated object', async () => {
    const result = await request(API).delete(`/person/${id}`);

    expect(result.status).toBe(204);
  });

  test('GET request for /person/:id, result equals object', async () => {
    const result = await request(API).get(`/person/${id}`);
    expect(result.status).toBe(404);
    expect(result.text).toBe('Message: the id you specified is not in the database');
  });
});
