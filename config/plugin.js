// config/plugin.js
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
  };

// {app_root}/config/plugin.js  配置插件
exports.jwt = {
  enable: true,
  package: "egg-jwt"
};

const path = require('path');
exports.ua = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-ua'),
};