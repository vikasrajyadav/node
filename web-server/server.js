const express = require("express");
const hbs = require("hbs");

var app = express();

hbs.registerPartials(__dirname + "views/partials");
app.set("view Engine", "hbs");
app.use(express.static(__dirname + "/public"));


app.use((req,res,next) =>{
var now = new Date().toString();
console.log(`${now}: ${req.method} ${req.url}`)
next();
});


app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home page",
    welcomeMessage: "Welcome to my Website",
    currentYear: new Date().getFullYear()
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Unable to handle the request"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port no. 3000");
});
