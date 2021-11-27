const db = require('../bd');
const idValidation = require('../helpers/id_validation');

module.exports = function deleteRequest(id, cbAnswer, cbError) {
  if (!id) {
    return cbError('ID_NOT_SPECIFIED');
  }
  if (!idValidation(id)) {
    return cbError('ID INVALID');
  }

  const index = db.findIndex((item) => item.id === id);

  if (index !== -1) {
    db.splice(index, 1);

    return cbAnswer([204, null, { 'Content-Type': 'application/json' }]);
  } else {
    return cbError('ID_NOT_FOUND');
  }
};
