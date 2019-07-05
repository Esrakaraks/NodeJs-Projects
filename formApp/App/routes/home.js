var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('home');

});
router.get('/login', function(req, res) {
    res.render('login');
});
router.post('/login', function(req, res) {
    console.log("fve")
});
router.get('/signUp', function(req, res) {
    res.render('signUp');
})
router.post('/signUp', function(req, res) {
    res.send('fewqfder');
})
module.exports = router;