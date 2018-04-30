var connection = require("./connection.js");


var orm = {
// selectAll(),
selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
}
// insertOne(),
// updateOne()
}

module.exports = orm;