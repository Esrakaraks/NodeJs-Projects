var express=require('express');
var router = express.Router();

/* GET home page. */

var persons=['ahmet','Mehmet','ali'];
router.get('/', function(req, res) {
  res.render('index',{persons:persons});
});
router.get('/home',function(req,res){
  res.render('home');
});


router.get('/login',function(req,res){
    res.render('login');
});

module.exports = router;
