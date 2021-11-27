const db = require('../bd');
const idValidation = require('../helpers/id_validation');

module.exports = async function getRequest(id, cbAnswer, cbError) {
  if (id) {
    if (!idValidation(id)) {
      return cbError('ID INVALID');
    }
    const results = db.filter((item) => item.id === id);

    if (!results.length) {
      return cbError('ID_NOT_FOUND');
    } else {
      return cbAnswer([200, ...results, { 'Content-Type': 'application/json' }]);
    }
  } else {
    return cbAnswer([200, db, { 'Content-Type': 'application/json' }]);
  }
};
