const db = require('../bd');
const errors = require('../helpers/errors');

module.exports = function deleteRequest(id, res) {
  if (!id) errors('ID_NOT_SPECIFIED', res);
  const index = db.findIndex((item) => item.id === id);

  if (index !== -1) {
    db.splice(index, 1);

    return [204, null, ['Content-Type', 'application/json']];
  } else return errors('ID_NOT_FOUND', res);
};
