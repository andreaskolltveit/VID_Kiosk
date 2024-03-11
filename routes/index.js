var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kiosk', currentPage: 'home', user: req.user });
});

module.exports = router;