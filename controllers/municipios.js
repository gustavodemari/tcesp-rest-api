var http = require('http');
var utils = require('./utils.js');
var municipios = [];

function municipiosRequest(callback){
  var body = '';
  http.get(utils.API_URL+'/api_json_municipios', function(res) {
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
    if(municipios.length === 0){
      municipiosRequest(function(body){
        municipios = utils.adjustRequestJSON(body);
        res.status(200);
        res.send(municipios);
      });
    }
    else {
      res.status(200);
      res.send(municipios);
    }
  }
};