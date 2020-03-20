// test/app/middleware/robot.test.js
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/middleware/robot.test.js', () => {
  it('should block robot', () => {
    return app.httpRequest()
      .get('/')
      .set('User-Agent', "Baiduspider")
      .expect(403);
  });

  it('should get a ctx', () => {
    const ctx = app.mockContext();
    assert(ctx.method === 'GET');
    assert(ctx.url === '/');
  });

  it('should mock ctx.user', () => {
    const ctx = app.mockContext({
      user: {
        name: 'fengmk2',
      },
    });
    assert(ctx.user);
    assert(ctx.user.name === 'fengmk2');
  });

});

//Mocha 使用 before/after/beforeEach/afterEach 来处理前置后置任务，基本能处理所有问题。 每个用例会按 before -> beforeEach -> it -> afterEach -> after 的顺序执行，而且可以定义多个。
describe('egg test', () => {
  before(() => console.log('order 1'));
  before(() => console.log('order 2'));
  after(() => console.log('order 6'));
  beforeEach(() => console.log('order 3'));
  afterEach(() => console.log('order 5'));
  it('should worker', () => console.log('order 4'));
});

//egg-bin 支持测试异步调用，它支持多种写法：
// 使用返回 Promise 的方式
it('should redirect', () => {
  return app.httpRequest()
    .get('/')
    .expect(200);
});

// 使用 callback 的方式
it('should redirect', done => {
  app.httpRequest()
    .get('/')
    .expect(200, done);
});

// 使用 async
it('should redirect', async () => {
  await app.httpRequest()
    .get('/')
    .expect(200);
});
