const PAGE_NOT_FOUND = 'PAGE_NOT_FOUND';
const WRONG_METHOD = 'WRONG_METHOD';
const ID_NOT_FOUND = 'ID_NOT_FOUND';
const ID_NOT_SPECIFIED = 'ID_NOT_SPECIFIED';
const VALIDATION_FAILED = 'VALIDATION_FAILED';
const REQUEST_FAILED = 'REQUEST_FAILED';
const ID_INVALID = 'ID INVALID';

module.exports = function errors(err, res) {
  let message = '';
  let error = 404;
  switch (err) {
    case ID_NOT_FOUND:
      message = 'Message: the id you specified is not in the database';
      break;
    case ID_NOT_SPECIFIED:
      message = 'Message: you did not specify id';
      break;
    case WRONG_METHOD:
      message = 'Message: you specified the wrong method';
      break;
    case PAGE_NOT_FOUND:
      message = 'Message: the url you requested does not exist';
      break;
    case VALIDATION_FAILED:
      error = 400;
      message =
        "Message: required fields:\n 'name' type of 'string',\n 'age' type of 'number',\n 'hobbies' type of 'Array'.";
      break;
    case REQUEST_FAILED:
      error = 400;
      message = 'Message: failed to process the request, check the entered data';
      break;
    case ID_INVALID:
      error = 400;
      message = 'Message: id invalid';
      break;
    default:
      break;
  }

  res.statusCode = error;
  res.end(message);
};
