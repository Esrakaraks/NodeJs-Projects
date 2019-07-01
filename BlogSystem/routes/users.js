var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { //  /posts
  res.send('respond with a resource');
});
router.get('/add',function(req ,res , next){
 res.render('posts');
});

module.exports = router;
