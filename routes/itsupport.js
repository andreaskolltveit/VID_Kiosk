const express = require('express');
const router = express.Router();
const sendEmail = require('../Services/GoogleSMPT');

router.get('/', (req, res) => {
  res.render('itsupport');
});

// Handle form submission
router.post('/form1', (req, res) => {
  // Get form data
  const { emne, dropdown, notater, studentnumber } = req.body;

  // Create email content
  const htmlContent = `
    <h5>Booket fra kiosk av: ${studentnumber}</h5>
    <p>Emne: ${emne}</p>
    <p>Kategori: ${dropdown}</p>
    <p>Notater: ${notater}</p>
  `;

  // Define mail options
  const mailOptions = {
    from: 'VID Kiosk Bergen',
    to: 'helpdesk@vid.no',
    subject: 'New form from Kiosk Bergen',
    html: htmlContent
  };

  // Send the email
  sendEmail(mailOptions);

  // Redirect to the same page after form submission
  res.redirect('/');
});

module.exports = router;