if(process.env.NODE_ENV === "production") {
  require('newrelic');
}

var path = require("path");
var express = require("express");
var favicon = require("serve-favicon");
var morgan = require("morgan");
var app = express();

app.get('/', function(req, res) {
  res.render(path.join(__dirname, "dist", "index.html"));
});

// EJS
app.set("views", __dirname + "/dist");
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);

// Middleware
app.use("/", express.static(path.join(__dirname, "dist")));
app.use(favicon(path.join(__dirname, "favicon.ico")));
app.use(morgan("combined")); // combined or dev

var port = process.env.PORT || 8001; // cafe24 port 8001

app.listen(port, function() {
  console.log("Server is running on " + port);
});