const express = require('express');
const { pageCounts } = require('../app');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('log', { pageCounts });
});

module.exports = router;