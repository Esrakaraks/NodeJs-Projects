var express = require('express');
var router = express.Router();
var users = require('../models/db');
var users = require('../models/users');
router.get('/', function(req, res) {
    res.render('home');

});
router.get('/login', function(req, res) {
    res.render('login');
});
router.post('/login', function(req, res) {
    res.render('login');
});
router.get('/signUp', function(req, res) {
    res.render('signUp');
})
router.post('/signUp', function(req, res) {
    var newUser = new users({
        name: "esra",
        surname: "karakas",
        email: "esra@gmail.com",
        username: "esraa",
        password: "e"


    });
    newUser.save((err, data) => {
        if (err)
            console.log(err);
        res.json(data);
    });


});
module.exports = router;