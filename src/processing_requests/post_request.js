const db = require('../bd');
const getBody = require('../helpers/get_body');
const objectValidation = require('../helpers/object_validation');
const { v4: uuidv4 } = require('uuid');
const errors = require('../helpers/errors');

module.exports = async function postRequest(req, res) {
  const body = await getBody(req);

  const lacks = objectValidation(body);

  if (lacks) errors('VALIDATION_FAILED', res);

  body['id'] = uuidv4();
  db.push(body);

  return [201, body, ['Content-Type', 'application/json']];
};
