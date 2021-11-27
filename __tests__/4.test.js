const request = require('supertest');

const API = 'http://localhost:3000';

describe('POST сheck all invalid requests', () => {
  test.each([
    [{ age: 3, hobbies: ['hobbies_3'] }],
    [{ name: 'test_2', hobbies: ['hobbies_3'] }],
    [{ name: 'test_2', age: 3 }],
    [{ name: 1, age: 3, hobbies: ['hobbies_3'] }],
    [{ name: 'test_2', age: '3', hobbies: ['hobbies_3'] }],
    [{ name: 'test_2', age: 3, hobbies: { hobbies_3: 'hobbies_3' } }],
  ])('POST request without required field, result 400 ', async (data) => {
    const result = await request(API).post('/person').send(data);
    expect(result.status).toBe(400);
    expect(result.text).toBe(
      "Message: required fields:\n 'name' type of 'string',\n 'age' type of 'number',\n 'hobbies' type of 'Array'.",
    );
  });
});
