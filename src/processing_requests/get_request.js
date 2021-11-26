const db = require('../bd');
const errors = require('../helpers/errors');
const idValidation = require('../helpers/id_validation');

module.exports = function getRequest(id, res) {
  if (id) {
    if (!idValidation(id)) {
      errors('ID INVALID', res);
      return false;
    }

    const results = db.filter((item) => item.id === id);

    if (!results.length) {
      errors('ID_NOT_FOUND', res);
      return false;
    }
    return [200, ...results, { 'Content-Type': 'application/json' }];
  }

  return [200, db, { 'Content-Type': 'application/json' }];
};
