var express = require('express');
var router = express.Router();
var regex = /^\d+$/;




/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("working");
  res.render('index', { title: 'Express' });
});

router.post('/', tooOld, isNumber,  checkString, function(req, res, next){
  console.log("posted")
  console.log(req.body)
  res.render('index', {title: "You're in!"})
})

function isNumber(req, res, next){
  if (typeof + req.body.age !== 'number'){
    res.render('index', {title: 'try again'})
  }
  else {next()}

}



function checkString(req, res, next){
  if ( !regex.test(req.body.age)) {
    console.log(req.body);
    res.render('index', {title:"enter number"})
  }

  else {next()}

}



function tooOld(req, res, next){
  if (+req.body.age > 100){
    res.render('index', {title:'Too old!'})
  }
  else {next()}
}

module.exports = router;
