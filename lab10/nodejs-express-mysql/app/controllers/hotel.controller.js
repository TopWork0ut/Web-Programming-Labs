const Hotel = require("../models/hotel.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const hotel = new Hotel({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    cost: req.body.cost,
    count_of_stars: req.body.count_of_stars,
    place: req.body.place,
  });

  Hotel.create(hotel, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Hotel.",
      });
    else res.send(data);
  });
};

exports.findAllByQuery = (req, res) => {
  const typeOfSorting = req.query.typeOfSorting;
  const typeOfDirection = req.query.typeOfDirection;

  Hotel.getSortedByQuery(typeOfSorting, typeOfDirection, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving hotels.",
      });
    else res.send(data);
  });
};

exports.findAllByPlace = (req, res) => {
  const place = req.query.place;

  Hotel.getByPlace(place, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving hotels.",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  const title = req.query.name;

  Hotel.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving hotels.",
      });
    else res.send(data);
  });
};

exports.findOneById = (req, res) => {
  Hotel.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Hotel with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Hotel with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Hotel.updateById(req.params.id, new Tutorial(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Hotel with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Hotel with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  Hotel.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Hotel with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Hotel with id " + req.params.id,
        });
      }
    } else res.send({ message: `Hotel was deleted successfully!` });
  });
};

exports.deleteAll = (req, res) => {
  Hotel.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all hotels.",
      });
    else res.send({ message: `All hotels were deleted successfully!` });
  });
};
