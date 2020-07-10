const express = require('express');
const cors = require('cors');
const routes = require('../../routes');
const { port, version } = require('../env');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'API to Pipedrive and Bling integration' });
});

Object.keys(routes).forEach((key) =>
  app.use(`/api/${version}/${key}`, routes[key])
);

app.use(cors());
app.use(express.json());
app.set('port', port || 3000);

module.exports = app;
