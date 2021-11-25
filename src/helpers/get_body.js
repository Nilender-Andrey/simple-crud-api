module.exports = async function getBody(req, cb) {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const data = Buffer.concat(buffers).toString();

  await req.on('end', () => {});

  return JSON.parse(data);
};
