const Router = require('koa-router');
const db = require('../db');

module.exports = () => {
  const router = new Router();
  const models = db.models;

  router.get('/list', async (ctx) => {

  	const results = await models.boards.findAll().map(({ id, name, content, created_at}) => {
      return { id, name, content, created_at };
    });

    ctx.body = {
      results
    };
    
  });

  return router;
};