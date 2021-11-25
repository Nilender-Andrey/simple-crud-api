const { server } = require('./index');

server.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${process.env.PORT}`);
});
