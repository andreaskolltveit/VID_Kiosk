const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('library', { currentPage: 'library' });
});

module.exports = router;