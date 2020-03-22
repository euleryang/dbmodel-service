// app/router.js
module.exports = app => {
    const { router, controller, middleware } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);

    router.post('/api/login',controller.api.user.login);
    router.get('/api/user/:id', controller.api.user.info);
    router.post('/api/userinfo', controller.api.user.getUserInfo);

  };