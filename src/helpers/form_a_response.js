module.exports = function formAResponse(res, cbError, data) {
  if (data) {
    const [statusCode, body, setHeader] = data;

    const answer = [
      res.writeHead(statusCode, setHeader),
      res.write(JSON.stringify(body)),
      res.end(),
    ];

    return answer;
  }
  return cbError('FALED_RESPONSE');
};
