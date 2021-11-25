const getRequest = require('./get_request');
const deleteRequest = require('./delete_request');
const postRequest = require('./post_request');
const putRequest = require('./put_request');
const errors = require('../helpers/errors');

module.exports = async function processingRequests(method, id, req, res) {
  switch (method) {
    case 'GET':
      return getRequest(id, res);
    case 'POST':
      return await postRequest(req, res);
    case 'PUT':
      return await putRequest(req, id, res);
    case 'DELETE':
      return deleteRequest(id, res);
    default:
      return errors('WRONG_METHOD', res);
  }
};
