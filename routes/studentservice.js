var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('studentservice', { currentPage: 'studentservice' });
});

module.exports = router;