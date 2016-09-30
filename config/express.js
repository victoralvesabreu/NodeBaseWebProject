var express = require('express');
var load = require('express-load');

module.exports = function(){
  var app = express();

  app.set("port", 3000);

  app.use(express.static("./public"));
  app.set("view engine", "pug");
  app.set("views", "./views");

  load("models")
    .then("controllers")
    .then("routes")
    .into(app);

    return app;
};
