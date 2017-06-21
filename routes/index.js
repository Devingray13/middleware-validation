var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("working");
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  console.log("posted")
  console.log(req.body)
  res.render('index', {title: 'Posted'})
})

module.exports = router;
