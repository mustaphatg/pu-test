var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  
  
  res.send( "Hello Musty, How are you")
  
});




module.exports = router;
