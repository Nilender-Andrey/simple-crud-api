module.exports = async function getBody(req) {
  const buffers = [];
  let result;

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const data = Buffer.concat(buffers).toString();

  await req.on('end', () => {});

  try {
    result = JSON.parse(data);
  } catch (error) {
    return false;
  }

  return result;
};
