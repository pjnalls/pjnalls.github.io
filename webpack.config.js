'use strict'
const environment = (process.env.NODE_ENV || 'development').trim();

environment === 'development' ? 
  module.exports = require('./config/webpack.config.dev')
  : module.exports = require('./config/webpack.config.prod');
