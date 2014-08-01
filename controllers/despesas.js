var http = require('http');
var utils = require('./utils.js');

function despesasRequest(params, callback){
  var body = '';
  var URL = '';
  var paramsKeys = ['municipioId', 'orgaoId', 'ano', 'mes', 'tipoDespesa'];
  var paramsArray = utils.jsonToArray(paramsKeys, params);

  if( paramsArray.length <= 3 ){
    URL = utils.API_URL+'/api_json_despesas_total/'+paramsArray.join('/');
  }
  else {
    URL = utils.API_URL+'/api_json_despesas/'+paramsArray.join('/');
  }

  http.get(URL, function(res) {
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
    despesasRequest(req.params, function(body){
      res.status(200);
      res.send(utils.adjustRequestJSON(body));
    });
  }
};