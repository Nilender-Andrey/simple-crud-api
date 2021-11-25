module.exports = function formAResponse(data, res) {
  if (data) {
    const [statusCode, body, setHeader] = data;

    const answer = [
      res.setHeader(...setHeader),
      (res.statusCode = statusCode),
      res.write(JSON.stringify(body)),
      res.end(),
    ];

    return answer;
  }
  return false;
};
