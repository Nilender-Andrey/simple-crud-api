const getRequest = require('./get_request');
const deleteRequest = require('./delete_request');
const postRequest = require('./post_request');
const putRequest = require('./put_request');

module.exports = async function processingRequests(method, id, req, cbAnswer, cbError) {
  switch (method) {
    case 'GET':
      return getRequest(id, cbAnswer, cbError);
    case 'POST':
      return postRequest(req, cbAnswer, cbError);
    case 'PUT':
      return putRequest(req, id, cbAnswer, cbError);
    case 'DELETE':
      return deleteRequest(id, cbAnswer, cbError);
    default:
      return cbError('WRONG_METHOD');
  }
};
