var express = require('express');
var app = express();


// End Point to Create Quiz and Questions
app.get('/items',function(req,res){
  var newQuiz = require('./newQuiz');
  //newQuiz.new1();
});
//start server
app.listen(3000);
