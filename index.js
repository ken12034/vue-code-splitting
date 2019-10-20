const path = require('path');
var express = require('express');
var app = express();


app.use('/dist', express.static(__dirname + '/dist'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(9487, function () {
  console.log('Example app listening on port 9487!');
});