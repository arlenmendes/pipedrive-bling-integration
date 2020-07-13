const dotenv = require('dotenv');

const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../../.env') });

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  version: process.env.VERSION,
  pipedriveDomain: process.env.PIPEDRIVE_DOMAIN,
  pipedriveToken: process.env.PIPEDRIVE_TOKEN,
};
