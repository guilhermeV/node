var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    let text = '';
    fs.readFile('newfile.txt', 'utf8', function (err, data) {
        text = data;
        res.render('index', {title: 'Express', text: text});
    });
});

router.post('/', function (req, res, next) {
    fs.writeFile('newfile.txt', req.body.text, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
});

module.exports = router;
