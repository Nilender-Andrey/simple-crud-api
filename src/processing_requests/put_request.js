const db = require('../bd');
const getBody = require('../helpers/get_body');
const errors = require('../helpers/errors');
const idValidation = require('../helpers/id_validation');

module.exports = async function putRequest(req, id, res) {
  if (!id) {
    errors('ID_NOT_SPECIFIED', res);
    return false;
  }
  if (!idValidation(id)) {
    errors('ID INVALID', res);
    return false;
  }

  const body = await getBody(req);
  const index = db.findIndex((item) => item.id === id);

  db[index] = { ...db[index], ...body };

  if (index === -1) {
    errors('ID_NOT_FOUND', res);
    return false;
  }
  return [200, db[index], ['Content-Type', 'application/json']];
};
