module.exports = app => {
  const zoo = require("../controllers/zoo.controller.js");

  var router = require("express").Router();

  
  router.post("/", zoo.create);
  const path = require('path');
  
  router.get("/", function(req,res){
    res.sendFile(path.resolve('./index.html'));
  });
  router.get("/zoo/", zoo.findAll);
  router.get("/zoo/:id", zoo.findOne);
  router.put("/zoo/:id", zoo.update);
  router.delete("/zoo/:id", zoo.delete);
  router.delete("/zoo/", zoo.deleteAll);

  
  app.use('/', router);

};
