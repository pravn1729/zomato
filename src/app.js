var express = require('express');
var morgan = require('morgan');
var cors = require('cors');
require('dotenv').config();
let logger = require('./helpers/logger');
const apiVersion = process.env.API_VERSION || '/v1';

// Routes
let orderRouter = require('./routes/order');

var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({limit: '1000mb'}));
app.use(express.urlencoded({ limit: '1000mb', extended: false }));

app.get(apiVersion+'/version', (req, res) => {
  return res.status(200).json({success: true, version: apiVersion });
})

app.use(apiVersion+'/orders', orderRouter);

// error handler
app.use(function(req, res, next) {
  logger.error('API not found');
  return res.status(404).json({success: false, message: 'API not found'});
});

module.exports = app;
