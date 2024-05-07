const express = require('express');
const sendEmail = require('../Services/GoogleSMPT');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('epost');
});

// Handle form IT
router.post('/it', (req, res) => {
    // Get form data
    const { emne, dropdown, notater, studentnumber } = req.body;
  
    // Create email content
    const htmlContent = `
      <h5>Booket fra kiosk av: ${studentnumber}</h5>
      <p>Emne: ${emne}</p>
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

// Handle form Bibliotek
router.post('/bib', (req, res) => {
    // Get form data
    const { emne, dropdown, notater, studentnumber } = req.body;
  
    // Create email content
    const htmlContent = `
      <h5>Booket fra kiosk av: ${studentnumber}</h5>
      <p>Emne: ${emne}</p>
      <p>Notater: ${notater}</p>
    `;
  
    // Define mail options
    const mailOptions = {
      from: 'VID Kiosk Bergen',
      to: 'bibliotek.bergen@vid.no',
      subject: 'New form from Kiosk Bergen',
      html: htmlContent
    };
  
    // Send the email
    sendEmail(mailOptions);
  
    // Redirect to the same page after form submission
    res.redirect('/');
  });
  
// Handle form Student service
router.post('/stud', (req, res) => {
    // Get form data
    const { emne, dropdown, notater, studentnumber } = req.body;
  
    // Create email content
    const htmlContent = `
      <h5>Booket fra kiosk av: ${studentnumber}</h5>
      <p>Emne: ${emne}</p>
      <p>Notater: ${notater}</p>
    `;
  
    // Define mail options
    const mailOptions = {
      from: 'VID Kiosk Bergen',
      to: 'studentservice@vid.no',
      subject: 'New form from Kiosk Bergen',
      html: htmlContent
    };
  
    // Send the email
    sendEmail(mailOptions);
  
    // Redirect to the same page after form submission
    res.redirect('/');
  });
  
  // Handle form Eksamenskontoert
router.post('/eks', (req, res) => {
  // Get form data
  const { emne, dropdown, notater, studentnumber } = req.body;

  // Create email content
  const htmlContent = `
    <h5>Booket fra kiosk av: ${studentnumber}</h5>
    <p>Emne: ${emne}</p>
    <p>Notater: ${notater}</p>
  `;

  // Define mail options
  const mailOptions = {
    from: 'VID Kiosk Bergen',
    to: 'eksamen@vid.no',
    subject: 'New form from Kiosk Bergen',
    html: htmlContent
  };

  // Send the email
  sendEmail(mailOptions);

  // Redirect to the same page after form submission
  res.redirect('/');
});
  
// Handle form Prest
router.post('/prest', (req, res) => {
    // Get form data
    const { emne, dropdown, notater, studentnumber } = req.body;
  
    // Create email content
    const htmlContent = `
      <h5>Booket fra kiosk av: ${studentnumber}</h5>
      <p>Emne: ${emne}</p>
      <p>Notater: ${notater}</p>
    `;
  
    // Define mail options
    const mailOptions = {
      from: 'VID Kiosk Bergen',
      to: 'kristin.hope@vid.no',
      subject: 'New form from Kiosk Bergen',
      html: htmlContent
    };
  
    // Send the email
    sendEmail(mailOptions);
  
    // Redirect to the same page after form submission
    res.redirect('/');
  });  

module.exports = router;