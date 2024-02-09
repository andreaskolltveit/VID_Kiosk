var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Memes Central', currentPage: 'home', user: req.user });
});

module.exports = router;