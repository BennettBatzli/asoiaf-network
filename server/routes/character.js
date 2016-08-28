var express = require('express');
var router = express.Router();

var asoaif = require('asoiaf-api');

router.get('/', function(req, res){
  console.log(req.body);
  var jon = asoaif.getCharacterByName("Jon Snow");
  //console.log('res', res);
  console.log('jon', jon);
  res.send(jon[0]);
});

module.exports = router;