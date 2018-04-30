var connection = require("./connection.js");
// var req = 


var orm = {
// selectAll(),
selectAll: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
},

// INSERT INTO burgers (burger_name, devoured) VALUES ("Cease and Desist", false);

insertOne: function(values) {
    var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
    console.log(queryString);
    connection.query(queryString, [values], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
},

// insertOne(),
// updateOne()

// "UPDATE movies SET movie = ? WHERE id = ?", [req.body.movie, req.params.id]

// insertOne: function(values) {
//     var queryString = "UPDATER burgers SET devoured WHERE id = ? (burger_name) VALUE";
//     console.log(queryString);
//     connection.query(queryString, [req.body.id], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
// }

}

module.exports = orm;