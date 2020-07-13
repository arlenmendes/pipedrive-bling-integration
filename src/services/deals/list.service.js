const { api } = require('../../utils');
const { pipedriveToken } = require('../../config/env');

module.exports.list = async (page, perPage) => {
  const response = await api.get('/deals', {
    params: { api_token: pipedriveToken },
  });

  return response.data;
};
