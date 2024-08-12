const express = require("express");
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const indexRouter = require('./routes/index');
const itsupportRouter = require('./routes/itsupport');
const libraryRouter = require('./routes/library');
const studentserviceRouter = require('./routes/studentservice');
const mazemapRouter = require('./routes/mazemap');
const nystudentRouter = require('./routes/nystudent');
const logRouter = require('./routes/log');
const epostRouter = require('./routes/epost');

const app = express();

const port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

// Serve favicon
app.use('/favicon.ico', express.static('public/favicon.ico'));

// CORS headers for all requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Handle OPTIONS method
app.options('/api/chat_panel', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.send();
});

// Proxy setup for POST requests
app.use('/api/chat_panel', createProxyMiddleware({
  target: 'https://vid.boost.ai',
  changeOrigin: true,
  pathRewrite: {
    '^/api/chat_panel': '/api/chat/v2', // rewrite path to match target API
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`Proxying request ${req.method} ${req.originalUrl} to ${proxyReq.path}`);
  },
  onError: (err, req, res) => {
    console.error(`Error proxying request ${req.method} ${req.originalUrl} - ${err.message}`);
    res.status(500).send('Proxy error');
  },
  onProxyRes: (proxyRes, req, res) => {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
  }
}));

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
