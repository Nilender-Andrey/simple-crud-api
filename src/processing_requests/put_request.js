const db = require('../bd');
const getBody = require('../helpers/get_body');
const errors = require('../helpers/errors');

module.exports = async function putRequest(req, id, res) {
  if (!id) errors('ID_NOT_SPECIFIED', res);

  const body = await getBody(req);
  let index = db.findIndex((item) => item.id === id);

  db[index] = { ...db[index], ...body };

  return index !== -1
    ? [200, db[index], ['Content-Type', 'application/json']]
    : errors('ID_NOT_FOUND', res);
};
