const router = require('express').Router();// eslint-disable-line
const items = require('./items');
const categories = require('./categories');

module.exports = (app) => {
  router.use('/items', items);
  router.use('/categories', categories);
  app.use('/api', router);
  return app;
};
