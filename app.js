const express = require("express");
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const axios = require('axios');

require('dotenv').config();

const indexRouter = require('./routes/index');
const itsupportRouter = require('./routes/ITsupport');
const libraryRouter = require('./routes/library');
const studentserviceRouter = require('./routes/studentservice');
const mazemapRouter = require('./routes/mazemap');
const nystudentRouter = require('./routes/nystudent');
const logRouter = require('./routes/log');
const epostRouter = require('./routes/epost');

const app = express();

const port = normalizePort(process.env.PORT || '8080');

/* app.listen(port, '10.205.64.155', () => {
  console.log(`Server is running on PORT ${port}`);
}); */


// Localhost for testing
app.listen(3000, '127.0.0.1', () => {
  console.log(`Server is running on http://localhost:3000`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use('/', indexRouter);
app.use('/itsupport', itsupportRouter);
app.use('/library', libraryRouter);
app.use('/studentservice', studentserviceRouter);
app.use('/mazemap', mazemapRouter);
app.use('/nystudent', nystudentRouter);
app.use('/log', logRouter);
app.use('/epost', epostRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}