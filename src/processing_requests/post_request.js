const { v4: uuidv4 } = require('uuid');
const db = require('../bd');
const getBody = require('../helpers/get_body');
const objectValidation = require('../helpers/object_validation');

module.exports = async function postRequest(req, cbAnswer, cbError) {
  const body = await getBody(req);

  if (body) {
    const lacks = objectValidation(body);

    if (!lacks) {
      return cbError('VALIDATION_FAILED');
    } else {
      const newPerson = {
        id: uuidv4(),
        ...body,
      };

      db.push(newPerson);

      return cbAnswer([201, newPerson, { 'Content-Type': 'application/json' }]);
    }
  } else {
    return cbError('REQUEST_FAILED');
  }
};
