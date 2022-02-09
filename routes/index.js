const express = require('express');

const productsRouter = require('./products');
const transactionsRouter = require('./transaction');
const usersRouter = require('./users');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/transactions', transactionsRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
