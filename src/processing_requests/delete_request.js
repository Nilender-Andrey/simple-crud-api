const db = require('../bd');
const errors = require('../helpers/errors');
const idValidation = require('../helpers/id_validation');

module.exports = function deleteRequest(id, res) {
  if (!id) {
    errors('ID_NOT_SPECIFIED', res);
    return false;
  }
  if (!idValidation(id)) {
    errors('ID INVALID', res);
    return false;
  }

  const index = db.findIndex((item) => item.id === id);

  if (index !== -1) {
    db.splice(index, 1);

    return [204, null, ['Content-Type', 'application/json']];
  }
  errors('ID_NOT_FOUND', res);
  return false;
};
