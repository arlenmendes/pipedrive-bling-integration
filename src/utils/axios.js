const axios = require('axios').default;
const { pipedriveDomain, pipedriveToken } = require('../config/env');

const api = axios.create({
  baseURL: `https://${pipedriveDomain}.pipedrive.com/api/v1`,
  // headers: { api_token: pipedriveToken },
});

module.exports.api = api;
