module.exports = appInfo =>{
  const config = exports={};

  config.keys = appInfo.name + "dbmodelcookie";

  // 登录token的有效期,设置为一周
  config.loginTokenTime = 7 * 24 * 60 * 60;

  config.security= {
    csrf : false,
  };

  config.middleware = [];

  config.errors = {
    INVALID_PARAM: {
      // 非法参数
      code: 1000,
      name: 'INVALID_PARAM',
      msg: '请求参数校验失败',
    },
    INVALID_AUTH_TOKEN: {
      // 非法auth_token
      code: 1001,
      name: 'INVALID_PARAM',
      msg: 'auth_token校验失败',
    },
    NO_RIGHTS_OPERATION: {
      // 您无权进行此操作
      code: 1001,
      name: 'NO_RIGHTS_OPERATION',
      msg: '您无权进行此操作',
    },
    HAS_LOGIN: {
      // 用户账号已登录
      code: 2000,
      name: 'HAS_LOGIN',
      msg: '用户账号已登录',
    },
    NOT_LOGIN: {
      // 非法auth_token
      code: 2001,
      name: 'NOT_LOGIN',
      msg: '用户账号未登录',
    },
    USER_EXIST: {
      // 用户已存在
      code: 2002,
      name: 'USER_EXIST',
      msg: '用户已存在',
    },
    USER_NOT_FOUND: {
      // 用户不存在
      code: 2003,
      name: 'USER_NOT_FOUND',
      msg: '用户不存在',
    },
    PASSWORD_ERROR: {
      // 账号密码错误
      code: 2004,
      name: 'PASSWORD_ERROR',
      msg: '账号密码错误',
    },
    CODE_VALIDATE_FAILED: {
      // 验证码验证失败
      code: 2005,
      name: 'CODE_VALIDATE_FAILED',
      msg: '验证码验证失败',
    },
    TICKET_NOT_FOUND: {
      // 凭证不存在或过期
      code: 2006,
      name: 'TICKET_NOT_FOUND',
      msg: '凭证不存在或过期',
    },
    TICKET_IS_USED: {
      // 凭证已使用
      code: 2007,
      name: 'TICKET_IS_USED',
      msg: '凭证已使用',
    },
    POST_NOT_FOUND: {
      // 帖子存在
      code: 2008,
      name: 'POST_NOT_FOUND',
      msg: '帖子不存在',
    },
  };

  return config;

}

exports.keys = "dbmodelcookie";

// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

// 添加 news 的配置项
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

// 处理这种问题就是关掉CSRF
exports.security= {
  csrf : false,
};


// config/config.default.js
// add middleware robot
exports.middleware = [
  'robot'
];

// robot's configurations
exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
};

// {app_root}/config/config.default.js 设置密钥
exports.jwt = {
  secret: "123456" //自己设置的值
};