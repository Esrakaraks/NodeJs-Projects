var express = require('express');
var router = express.Router();
var users = require('../models/users');


router.get('/usersDelete', function(req, res) {
    users.findOneAndRemove({ username: req.params.username });
    if (err) {
        console.log("silmede hata var")
    }
    res.render('usersList');
})