var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var orm = require("./config/orm.js")

// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);
orm.selectWhere()


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});