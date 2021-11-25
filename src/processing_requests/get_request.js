const db = require('../bd');
const errors = require('../helpers/errors');

module.exports = function (id, res) {
  if (id) {
    let results = db.filter((item) => item.id === id);

    if (results.length)
      return [200, ...results, ['Content-Type', 'application/json']];
    else errors('ID_NOT_FOUND', res);
  } else return [200, db, ['Content-Type', 'application/json']];
};
