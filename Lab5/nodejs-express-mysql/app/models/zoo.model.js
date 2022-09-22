const sql = require("./db.js");

const Zoo = function(zoo) {
  this.name = zoo.name;
  this.countOfVisitors = zoo.countOfVisitors;
  this.countOfAnimals = zoo.countOfAnimals;
};

Zoo.create = (newZoo, result) => {
  sql.query("INSERT INTO zoo SET ?", newZoo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created zoo: ", { id: res.insertId, ...newZoo });
    result(null, { id: res.insertId, ...newZoo });
  });
};

Zoo.findById = (id, result) => {
  sql.query(`SELECT * FROM zoo WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found zoo: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Zoo.getAll = (name, result) => {
  let query = "SELECT * FROM zoo";

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("zoos: ", res);
    result(null, res);
  });
};

Zoo.updateById = (id, zoo, result) => {
  sql.query(
    "UPDATE zoos SET name = ?, countOfVisitors = ?, countOfAnimals = ? WHERE id = ?",
    [zoo.name, zoo.countOfVisitors, zoo.countOfAnimals, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found zoo with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated zoo: ", { id: id, ...zoo });
      result(null, { id: id, ...zoo });
    }
  );
};

Zoo.remove = (id, result) => {
  sql.query("DELETE FROM zoo WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Zoo with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted zoo with id: ", id);
    result(null, res);
  });
};

Zoo.removeAll = result => {
  sql.query("DELETE FROM zoo", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} zoo`);
    result(null, res);
  });
};

module.exports = Zoo;
