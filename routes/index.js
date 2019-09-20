var express = require('express');
var router = express.Router();
var fs = require('fs');
require("firebase/auth");
require("firebase/app");
require("firebase/firestore");

var email = "guilherme.vinicius.a.p@gmail.com";
var password = "testee";

/* GET home page. */
router.get('/', function (req, res, next) {
    let text = '';
    fs.readFile('newfile.txt', 'utf8', function (err, data) {
        text = data;
        res.render('index', {title: 'Express', text: text});
    });
});

router.get('/login', function (req, res, next) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (message) {
        res.send("logou mano");
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            res.send('Wrong password.');
        } else {
            res.send(errorMessage);
        }
        res.send(error);
    });
});

router.get('/sql', function (req, res, next) {

    var db = firebase.firestore();

    db.collection("bike").get().then((querySnapshot) => {
        console.log('success');
        var docs = [];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            docs.push(doc.data());
        });
        res.send(docs);
    }).catch(function (error) {
        console.log(error);
    });

});


router.get('/insert', function (req, res, next) {
    var db = firebase.firestore();
    var data = {name: "nome5"};

    db.collection('bike').doc('outraBike').set(data).then(function(success) {
        console.log('suc');
        res.send('suc');
    }).catch(function(error) {
        console.log(error);
        res.send(error);
    });

});

router.get('/insertAdd', function (req, res, next) {
    var db = firebase.firestore();

    db.collection("bike").add({
        name: "nome3"
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            res.send('sucess');
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
            res.send('error');
        });
});


router.post('/', function (req, res, next) {
    fs.writeFile('newfile.txt', req.body.text, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
});

module.exports = router;
