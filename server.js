/* Environment variables */
var config = require('./configs/config.js');

/* Module loading */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');

/* Controller loading */

var users = require('./controllers/users.js');
var municipios = require('./controllers/municipios.js');
var orgaos = require('./controllers/orgaos.js');
var despesas = require('./controllers/despesas.js');

/* Module starting */

var app = express();

//Enabling req.body for x-www-form-url-encoded
app.use(bodyParser.urlencoded({ extended: true }));

//Enabling req.body for application/json
app.use(bodyParser.json());

//Enable CORS
app.use(cors());

/* Routes */

router.route('/users')
  .get(users.list)
  .post(users.create);

router.route('/users/:userId')
  .get(users.list)
  .put(users.edit)
  .delete(users.delete);

router.route('/municipios')
  .get(municipios.list);

router.route('/orgaos')
  .get(orgaos.list);

router.route('/despesas/:municipioId')
  .get(despesas.list);

router.route('/despesas/:municipioId/:orgaoId/:ano')
  .get(despesas.list);

router.route('/despesas/:municipioId/:orgaoId/:ano/:mes/:tipoDespesa')
  .get(despesas.list);  

//All routes prefixed with /api
app.use('/api', router);

/* Server starting */

app.listen(config.server.PORT, function(){
  console.log('Back-end server running at '+config.server.PORT);
});