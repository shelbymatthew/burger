var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });

  module.exports = connection;