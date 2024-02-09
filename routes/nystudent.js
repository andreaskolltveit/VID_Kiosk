var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('nystudent', { currentPage: 'nystudent' });
});

module.exports = router;