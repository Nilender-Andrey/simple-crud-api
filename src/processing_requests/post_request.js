const { v4: uuidv4 } = require('uuid');
const db = require('../bd');
const getBody = require('../helpers/get_body');
const objectValidation = require('../helpers/object_validation');
const errors = require('../helpers/errors');

module.exports = async function postRequest(req, res) {
  const body = await getBody(req);

  if (body) {
    const lacks = objectValidation(body);

    if (!lacks) {
      errors('VALIDATION_FAILED', res);
      return false;
    }

    body.id = uuidv4();
    db.push(body);

    return [201, body, { 'Content-Type': 'application/json' }];
  }
  errors('REQUEST_FAILED', res);
  return false;
};
