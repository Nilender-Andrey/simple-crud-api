function validationOfProperties(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      switch (key) {
        case 'name':
          if (typeof obj[key] !== 'string') return false;
          break;
        case 'age':
          if (typeof obj[key] !== 'number') return false;
          break;
        case 'hobbies':
          if (!Array.isArray(obj[key])) return false;
          break;
        default:
          break;
      }
    }
  }
  return true;
}

module.exports = function objectValidation(obj) {
  const permissibleProperties = ['name', 'age', 'hobbies'];

  const absentProperties = permissibleProperties.find((item) => item === undefined);

  const resValidationOfProperties = validationOfProperties(obj);

  return !absentProperties && resValidationOfProperties;
};
