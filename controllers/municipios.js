var http = require('http');
var utils = require('./utils.js');

const API_URL = 'http://www.portaldocidadao.tce.sp.gov.br';

function municipiosRequest(callback){
  var body = '';
  http.get(API_URL+'/api_json_municipios', function(res) {
    res.on('data', function(chunk){
      body += chunk;
    });
    res.on('end', function(){
      callback(body);
    })
  }).on('error', function(e) {
    console.log('Request error');
  });
}

module.exports = {
  list: function(req, res){
    municipiosRequest(function(body){
      res.status(200);
      res.send(utils.adjustRequestJSON(body));
    });
  }
}


