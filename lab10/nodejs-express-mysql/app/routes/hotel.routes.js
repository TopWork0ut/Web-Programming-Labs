module.exports = (app) => {
  const hotel = require("../controllers/hotel.controller.js");
  var router = require("express").Router();

  router.post("/", hotel.create);
  const path = require("path");

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  router.get("/hotels/sort/", hotel.findAllByQuery);
  router.get("/hotels/sort-by-place/", hotel.findAllByPlace);
  router.get("/hotels/", hotel.findAll);
  router.get("/hotels/:id", hotel.findOneById);
  router.put("/hotels/:id", hotel.update);
  router.delete("/hotels/:id", hotel.delete);
  router.delete("/hotels/", hotel.deleteAll);

  app.use("/", router);
};
