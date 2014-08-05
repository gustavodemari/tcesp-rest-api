var http = require('http');
var utils = require('./utils.js');

var orgaos = [];

function orgaosRequest(callback){
  var body = '';
  http.get(utils.API_URL+'/api_json_orgaos', function(res) {
    res.on('data', function(chunk){
      body += chunk;
    });
    res.on('end', function(){
      callback(body);
    });
  }).on('error', function(e) {
    console.log('Request error');
  });
}

module.exports = {
  list: function(req, res){
    if(orgaos.length === 0){
      orgaosRequest(function(body){
        orgaos = utils.adjustRequestJSON(body);
        res.status(200);
        res.send(orgaos);
      });
    }
    else {
      res.status(200);
      res.send(orgaos);
    }
  }
};


