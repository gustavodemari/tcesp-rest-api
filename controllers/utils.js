exports.adjustRequestJSON = function (json){
  var i = 0;
  var adjusted = [];
  json = JSON.parse(json);
  for (; i < json.nodes.length ; i++){
    adjusted.push(json.nodes[i].node);
  }   
  return adjusted;
}
