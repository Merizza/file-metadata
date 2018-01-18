const express = require("express"),
      exphbs = require("express-handlebars");
const path = require("path");

var index = require("./routes/index");

var port = process.env.PORT || 3000;

var app = express();

/*===Views===*/
app.set("views", path.join(__dirname, "/views"));
app.engine("handlebars", exphbs({
  defaultLayout: __dirname + "/views/layouts/default.handlebars",
  layoutsDir: __dirname + "/views"
}));
app.set("view engine", "handlebars");

/*===Static===*/
app.use(express.static(path.join(__dirname, "public")));

/*===Route===*/
app.use("/", index);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

module.exports = app;