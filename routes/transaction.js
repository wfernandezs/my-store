const express = require('express');
const TransactionsService = require('../services/transaction.service');
const service = new TransactionsService();

const router = express.Router();

router.get('/', (req, res) => {
  const transactions = service.list();
  res.json(transactions);
});

module.exports = router;
