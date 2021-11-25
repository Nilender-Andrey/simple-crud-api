const http = __non_webpack_require__('http');
const url = __non_webpack_require__('url');

const processingRequests = require('./processing_requests');
const formResponse = require('./helpers/form_a_response');
const errors = require('./helpers/errors');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const urlReq = url.parse(req.url);
  const pathname = urlReq.pathname.replace('/', '').split('/')[0];
  const id = urlReq.pathname.replace('/', '').split('/')[1];
  const method = req.method;

  if (pathname === 'person') {
    processingRequests(method, id, req, res).then((data) =>
      formResponse(data, res)
    );
  } else {
    errors('PAGE_NOT_FOUND', res);
  }
});

server.listen(PORT, (error) => {
  error ? console.log(error) : console.log('Listening port 3000');
});
