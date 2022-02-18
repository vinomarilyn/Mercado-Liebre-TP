var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

/* ENRUTADORES (agregamos una variable) */
var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/usersRouter');//(paso 1: definimos/crear la variable)
var productsRouter = require('./routes/productsRouter');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// nos define donde estamos parados
app.use(methodOverride('_method'));

/* MIDDLEWARES DE RUTAS (establecemos una ruta)*/
app.use('/', indexRouter);
app.use('/user', usersRouter);// (paso 2: "" ) + el nombre del archivo en la carpeta router
app.use('/products', productsRouter);

app.use(express.static('public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
