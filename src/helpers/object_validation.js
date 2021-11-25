module.exports = function objectValidation(obj) {
  const permissibleProperties = ['name', 'age', 'hobbies'];

  const result = permissibleProperties.find(
    (item) => !obj.hasOwnProperty(item)
  );

  return result;
};
