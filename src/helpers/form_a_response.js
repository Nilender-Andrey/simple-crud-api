module.exports = function formAResponse(data, res) {
  if (data) {
    const [statusCode, body, setHeader] = data;

    const answer = [
      res.writeHead(statusCode, setHeader),
      res.write(JSON.stringify(body)),
      res.end(),
    ];

    return answer;
  }
  return false;
};
