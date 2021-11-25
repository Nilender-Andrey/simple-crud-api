const http = require('http');
const url = require('url');
require('dotenv').config();

const processingRequests = require('./processing_requests');
const formAResponse = require('./helpers/form_a_response');
const errors = require('./helpers/errors');

const server = http.createServer((req, res) => {
  const urlReq = url.parse(req.url);
  const pathname = urlReq.pathname.replace('/', '').split('/')[0];
  const id = urlReq.pathname.replace('/', '').split('/')[1];
  const { method } = req;

  if (pathname === 'person') {
    processingRequests(method, id, req, res).then((data) => formAResponse(data, res));
  } else {
    errors('PAGE_NOT_FOUND', res);
  }
});

module.exports = { server };
