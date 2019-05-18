var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8080;

var app = express();

// Serve content for the app from "public" directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Express Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes & give server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);

