var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// routes
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error.pug');
});

firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

var firebaseConfig = {
    apiKey: "AIzaSyDsbNp1axrPdmTnqyFRqwhRoRZRZfw_uKk",
    authDomain: "rosy-algebra-249618.firebaseapp.com",
    databaseURL: "https://rosy-algebra-249618.firebaseio.com",
    projectId: "rosy-algebra-249618",
    storageBucket: "rosy-algebra-249618.appspot.com",
    messagingSenderId: "319517874514",
    appId: "1:319517874514:web:f47d1cc5b53e7ccb9bc28b"
};

// firebase.initializeApp({
//     apiKey: '### FIREBASE API KEY ###',
//     authDomain: '### FIREBASE AUTH DOMAIN ###',
//     projectId: '### CLOUD FIRESTORE PROJECT ID ###'
// });

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var defaultAuth = firebase.auth();
var email = "guilherme.vinicius.a.p@gmail.com";
var password = "testee";
//
// firebase.auth().signInWithEmailAndPassword(email, password).then(function (message) {
// }).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     if (errorCode === 'auth/wrong-password') {
//         console.log('Wrong password.');
//     } else {
//         console.log(errorMessage);
//     }
//     console.log(error);
// });

firebase.auth().signInWithEmailAndPassword(email, password).then(function (message) {
    // res.send("logou mano");
}).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
        console.log('Wrong password.');
    } else {
        console.log(errorMessage);
    }
    console.log(error);
});


module.exports = app;
