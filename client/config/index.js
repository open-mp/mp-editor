'use strict';
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = function (env) {
  let assetsRoot = path.resolve(__dirname, '../../server/app/public');
  let isProduction = env == 'production';
  let config = {
    env: '',
    assetsRoot,
    dll: {
      base: ['query-string', 'axios','react','react-dom', 'zent/css/index.css']
    },
    isProduction
  };
  return config;
};
