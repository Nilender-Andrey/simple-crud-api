const db = require('../bd');
const getBody = require('../helpers/get_body');
const idValidation = require('../helpers/id_validation');

module.exports = async function putRequest(req, id, cbAnswer, cbError) {
  if (!id) {
    return cbError('ID_NOT_SPECIFIED');
  }
  if (!idValidation(id)) {
    return cbError('ID INVALID');
  }

  const body = await getBody(req);
  const index = db.findIndex((item) => item.id === id);

  db[index] = { ...db[index], ...body };

  if (index === -1) {
    return cbError('ID_NOT_FOUND');
  } else {
    return cbAnswer([200, db[index], { 'Content-Type': 'application/json' }]);
  }
};
