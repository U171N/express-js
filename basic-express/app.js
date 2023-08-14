// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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




/*basic express js-Connect Express on NodeJS*/
// Import the built-in 'http' module
// const http = require('http');

// // Create a server object
// const server = http.createServer((req, res) => {
//   // Set the response header
//   res.writeHead(200, {'Content-Type': 'text/plain'});

//   // Write a response to the client
//   res.write('Hello, World!');
  
//   // End the response
//   res.end();
// });

// // Start the server and listen on port 3000
// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
