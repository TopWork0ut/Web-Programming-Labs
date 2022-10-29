const sql = require("./db.js");

const Hotel = function (hotel) {
  this.name = hotel.name;
  this.image = hotel.image;
  this.description = hotel.description;
  this.cost = hotel.cost;
  this.count_of_stars = hotel.count_of_stars;
  this.place = hotel.place;
};

Hotel.create = (newHotel, result) => {
  sql.query("INSERT INTO hotels SET ?", newHotel, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created hotel: ", { id: res.insertId, ...newHotel });
    result(null, { id: res.insertId, ...newHotel });
  });
};

Hotel.findById = (id, result) => {
  sql.query(`SELECT * FROM hotels WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found hotel: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Hotel.getSortedByQuery = (typeOfSorting, typeOfDirection, result) => {
  // sql.query(`SELECT * FROM hotels order by cost ${type}`, (err, res) => {
  let query = "SELECT * FROM hotels ";

  if (typeOfSorting) {
    query += ` order by ${typeOfSorting} `;
  }

  if (typeOfDirection) {
    query += ` ${typeOfDirection}`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("hotels: ", res);
    result(null, res);
  });
};

Hotel.getByPlace = (place, result) => {
  // sql.query(`SELECT * FROM hotels order by cost ${type}`, (err, res) => {
  let query = "SELECT * FROM hotels ";

  if (place) {
    query += ` where place = '${place}' `;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("hotels: ", res);
    result(null, res);
  });
};

Hotel.getAll = (name, result) => {
  let query = "SELECT * FROM hotels";

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("hotels: ", res);
    result(null, res);
  });
};

Hotel.updateById = (id, hotel, result) => {
  sql.query(
    "UPDATE hotels SET name = ?, image = ?, description = ?, cost = ?, count_of_stars = ?, place = ? WHERE id = ?",
    [
      hotel.name,
      hotel.image,
      hotel.description,
      hotel.cost,
      hotel.count_of_stars,
      hotel.place,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found hotel with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated hotel: ", { id: id, ...hotel });
      result(null, { id: id, ...hotel });
    }
  );
};

Hotel.remove = (id, result) => {
  sql.query("DELETE FROM hotels WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Hotel with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted hotel with id: ", id);
    result(null, res);
  });
};

Hotel.removeAll = (result) => {
  sql.query("DELETE FROM hotels", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} hotel`);
    result(null, res);
  });
};

module.exports = Hotel;
