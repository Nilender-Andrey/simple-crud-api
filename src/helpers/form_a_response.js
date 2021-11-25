module.exports = function (data, res) {
  if (data) {
    const [statusCode, body, setHeader] = data;

    return [
      res.setHeader(...setHeader),
      (res.statusCode = statusCode),
      res.write(JSON.stringify(body)),
      res.end(),
    ];
  }
};
