const nodemailer = require('nodemailer');

// Create SMTP transporter with Gmail SMTP settings
const gmailTransporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "vidkiosk@gmail.com",
      pass: "oznk ahfb vomq diyn",
    },
});

// Create SMTP transporter with Office365 SMTP settings
const officeTransporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: "test",
        pass: "test"
    }
});

// Function to send email
function sendEmail() {
    gmailTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = sendEmail;