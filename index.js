const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const vhost = require("vhost")
const http = require("http");
const cors = require("cors")

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');
const productsRouter = require("./routes/products")
const downloadRouter = require("./routes/download")
const uploadRouter = require("./routes/upload")

const {app} = require("./app")
const server = http.createServer(app);


const config = require("dotenv").config()
const dbConnection = require("./db/mongoose"); 

const hPort = process.env.HTTPPORT || 3000
const domain = process.env.DOMAIN || 'localhost'

app.use(function(req,res,next) {
  // console.log(req)
  next();
})

app.use(cors({origin: true}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/storage', express.static('uploads'));


app.use(vhost('api.'+domain, apiRouter));
app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/download', downloadRouter);
app.use('/upload', uploadRouter);


server.listen(hPort, function() {
  console.log("app running on port: "+hPort)
});
















































































































// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

/**
 * Listen on provided port, on all network interfaces.
 */
