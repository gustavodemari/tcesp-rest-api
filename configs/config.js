module.exports = {
  server : {
    HOST : process.env.NODEJS_HOST || 'localhost',
    PORT : process.env.NODEJS_PORT || 5000,
    CORS_SETUP : function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
    }
  },
  db : {
    mysql : {
    HOST : process.env.MYSQL_HOST || 'localhost',
    PORT : process.env.MONGODB_PORT || 3306,
    USERNAME : process.env.MYSQL_USERNAME || 'root',
    PASSWORD : process.env.MYSQL_PASSWORD || 'password'
    },
    mongodb : {
      HOST : process.env.MONGODB_HOST || 'localhost',
      PORT : process.env.MONGODB_PORT || 27017,
      USERNAME : process.env.MONGODB_USERNAME || 'admin',
      PASSWORD : process.env.MONGODB_PASSWORD || 'password',
      DATABASE_NAME : process.env.MONGODB_DATABASE_NAME || 'restapi'
    },
    postgres : {
      HOST : process.env.MONGODB_HOST || 'localhost',
      PORT : process.env.MONGODB_PORT || 5432,
      USERNAME : process.env.MONGODB_USERNAME || 'root',
      PASSWORD : process.env.MONGODB_PASSWORD || 'password'
    }
  }
}