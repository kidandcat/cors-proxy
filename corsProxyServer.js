var express = require('express');
var http = require('http');
var request = require("request");


var app = express();

var httpServer = http.createServer(app);



httpServer.listen(5555);




//POST POST POST POST POST POST
app.use(function(req, res, next){
  var x = req.url.split('');
  x.shift();
  var z = x.join('');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  request(z, function(error, response, body) {
    res.send(body);
  });
});


app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('Errorr');
});

module.exports = app;
