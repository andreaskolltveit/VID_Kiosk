const express = require('express');
const router = express.Router();
const sendEmail = require('../Services/GoogleSMPT');

router.get('/', (req, res) => {
  res.render('itsupport');
});

module.exports = router;