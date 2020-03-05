const { Application } = require('@javascriptru/project-server');
const config = require('./config');
const send = require('koa-send');
const Router = require('@koa/router');

const app = new Application({
  publicRoot: config.publicRoot,
  cors: true
});

app.context.db = require('./libs/db');

app.use(async (ctx, next) => {
  if (!ctx.url.includes('.') && !ctx.url.startsWith('/api')) {
    await send(ctx, 'index.html', {root: config.publicRoot});
  } else {
    await next();
  }
});

const router = new Router({prefix: '/api'});
router.get('/dashboard/orders', require('./controllers/api/dashboard/orders'));
router.get('/dashboard/sales', require('./controllers/api/dashboard/sales'));
router.get('/dashboard/customers', require('./controllers/api/dashboard/customers'));
router.get('/dashboard/bestsellers', require('./controllers/api/dashboard/bestsellers'));
router.get('/reload', require('./controllers/api/reload'));
router.use('/rest', require('@javascriptru/rest')(app.context.db));
app.use(router.routes());

module.exports = app;
