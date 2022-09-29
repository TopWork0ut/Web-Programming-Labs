const Zoo = require("../models/zoo.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const zoo = new Zoo({
    name: req.body.name,
    countOfVisitors: req.body.countOfVisitors,
    countOfAnimals: req.body.countOfAnimals 
  });

  Zoo.create(zoo, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Zoo."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  const title = req.query.name;

  Zoo.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving zoos."
      });
    else res.send(data);
  });
};

exports.findAllPublished = (req, res) => {
  Zoo.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving zoos."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Zoo.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Zoo with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Zoo with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};


exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Zoo.updateById(
    req.params.id,
    new Tutorial(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Zoo with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Zoo with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Zoo.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Zoo with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Zoo with id " + req.params.id
        });
      }
    } else res.send({ message: `Zoo was deleted successfully!` });
  });
};

exports.deleteAll = (req, res) => {
  Zoo.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all zoos."
      });
    else res.send({ message: `All zoos were deleted successfully!` });
  });
};
