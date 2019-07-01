var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addposts', { title: 'Express' });
});

router.post('/add',function(req ,res , next){
 res.render('addposts');
});

module.exports = router;
