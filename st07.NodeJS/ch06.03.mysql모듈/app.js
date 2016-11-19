// 모듈 선언
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routeIndex   = require('./routes/index');
var routeHome    = require('./routes/home');
var routeLogin   = require('./routes/login');
var routeBook    = require('./routes/book');
var routeUser    = require('./routes/users');
var routePhone   = require('./routes/phone');


// 서버 생성
var app = express();

// views 설정
app.set('case sensitive routes', false); // url 대소문자 구분 무시
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 사용할 미들웨어 추가
app.use(logger('dev'));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 라우터
app.use('/'     , routeIndex);
app.use('/home' , routeHome);
app.use('/login', routeLogin);
app.use('/book' , routeBook);
app.use('/user' , routeUser);
app.use('/phone', routePhone);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

