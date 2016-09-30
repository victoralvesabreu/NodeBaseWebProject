module.exports = function(app){
  var controller = {};

  controller.getIndex = function(req, res){
    res.render("index", {title : "Node Base web Project"});
  };

  return controller;
};
