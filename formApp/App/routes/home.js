var express = require('express');
var router = express.Router();
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
});

router.get('/usersList', function(req, res) {
    users.find(function(err, results) {
        console.log(results);
        res.render('usersList', { datas: results });
    });

});


router.post('/signUp', function(req, res) {
    // var newUser = new users({
    //     name: "esra",
    //     surname: "karakas",
    //     email: "esra@gmail.com",
    //     username: "essra",
    //     password: "e"


    // });
    // newUser.save((err, data) => {
    //     if (err)
    //         console.log(err);
    //     res.json(data);
    // });

    var newuser = new users({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    newuser.save((err, data) => {
        if (err)
            console.log(err);
        res.render('usersList');
    })



});


module.exports = router;