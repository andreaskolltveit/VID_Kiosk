// Import required modules and libraries
const express = require("express");
const bodyParser = require("body-parser");
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const axios = require('axios');

// Import route handlers
const indexRouter = require('./routes/index');
const itsupportRouter = require('./routes/ITsupport');
const libraryRouter = require('./routes/library');
const studentserviceRouter = require('./routes/studentservice');
const mazemapRouter = require('./routes/mazemap');
const nystudentRouter = require('./routes/nystudent');
const logRouter = require('./routes/log');

// Create an Express application
const app = express();

// Normalize the port for the server to listen on
const port = normalizePort(process.env.PORT || '3000');

// Start the server and log the port
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

// Set view engine and views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up middleware for handling requests and parsing data
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(session({
  secret: 'hard_to_swallow_pills',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// Define routes for different parts of the application
app.use('/', indexRouter);
app.use('/itsupport', itsupportRouter);
app.use('/library', libraryRouter);
app.use('/studentservice', studentserviceRouter);
app.use('/mazemap', mazemapRouter);
app.use('/nystudent', nystudentRouter);
app.use('/log', logRouter);

// Catch 404 errors and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler, render the error page
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Export the Express application
module.exports = app;

// Function to normalize the port
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}