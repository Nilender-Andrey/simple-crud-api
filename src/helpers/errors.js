const PAGE_NOT_FOUND = 'PAGE_NOT_FOUND';
const WRONG_METHOD = 'WRONG_METHOD';
const ID_NOT_FOUND = 'ID_NOT_FOUND';
const ID_NOT_SPECIFIED = 'ID_NOT_SPECIFIED';
const VALIDATION_FAILED = 'VALIDATION_FAILED';

module.exports = function errors(err, res) {
  let message = '';
  let error = 404;
  switch (err) {
    case ID_NOT_FOUND:
      message = `Message: the id you specified is not in the database`;
      break;
    case ID_NOT_SPECIFIED:
      message = `Message: you did not specify id`;
      break;
    case WRONG_METHOD:
      message = `You specified the wrong method`;
      break;
    case PAGE_NOT_FOUND:
      message = `The url you requested does not exist`;
      break;
    case VALIDATION_FAILED:
      error = 400;
      message = `Required fields (name, age, hobbies).`;
      break;
  }

  res.statusCode = error;
  res.end(message);
};
