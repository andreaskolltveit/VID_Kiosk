var express = require('express');
var router = express.Router();
var sendEmail = require('../Services/GoogleSMPT');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kiosk', currentPage: 'home', user: req.user });
});


router.post('/sendEmail', (req, res) => {
  sendEmail();
  res.send('Email sent');
});

module.exports = router;