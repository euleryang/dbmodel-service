'use strict'

const Controller = require('egg').Controller

const rule = {
    email: {
      type: 'email',
      required: true,
    },
    code: {
      type: 'string',
      required: true,
      min: 6,
      max: 6,
    },
    password: {
      type: 'password',
      required: true,
      min: 6,
      max: 20,
    },
    ticket: {
      type: 'string',
      required: true,
    },
  };

  class UserController extends Controller{
    async login(){
        const {ctx, app} = this;
        // ctx.validate(
        //   {
        //     email: rule.email,
        //     password: rule.password,
        //   },
        //   ctx.request.body
        // );

        const {email, password} = ctx.request.body;
        // ctx.helper.$fail(email, password);
        // return;
        if(email && password){
          const token = app.jwt.sign({ email, password }, app.config.jwt.secret, {expiresIn:'24h'});
          /*
          * sign({根据什么生成token})
          * app.config.jwt.secret 配置的密钥
          * {expiresIn:'24h'} 过期时间
          */
          ctx.helper.$success({
            token,
            expires: this.config.loginTokenTime,
          });

          return;
        } else {
          // 登录失败
          const { PASSWORD_ERROR } = this.config.errors;
          ctx.helper.$fail(PASSWORD_ERROR.code, PASSWORD_ERROR.code.msg);
          return;
        }
    };

    async info() {
      const { ctx } = this;
      ctx.body = {
        name: `hello ${ctx.params.id}`,
      };
    };

    async getUserInfo() {
      const app = this.app;
      const token = this.ctx.header.authorization; // 获取jwt
      let payload
      if (token) {
          payload = await app.jwt.verify(token.split('.')[1], app.config.jwt.secret)  // // 解密，获取payload
          this.ctx.body = {
              payload
          }
      } else {
        this.ctx.body = {
              message: 'token 错误',
              code: -1
          }
      }
    };

  }

  module.exports = UserController;