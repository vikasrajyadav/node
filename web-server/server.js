//importing package by using require starts here

const fs = require("fs");

const express = require("express");
const hbs = require("hbs");

var app = express();

hbs.registerPartials(__dirname + "views/partials");
app.set("view Engine", "hbs");
app.use(express.static(__dirname + "/public"));

// importing packages ends here

// log generate code starts

app.use((req, res, next) => {
  var now = new Date().toString();

  var log = `${now}: ${req.method} ${req.url}`;
  fs.appendFile("Server.log", log + "\n", err => {
    if (err) {
      console.log("Unable to append  server.log");
    }
  });
  console.log();
  next();
});

// log generator code ends


// webpages with handlebars starts here

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

// webpages with handlebars ends here


// port no. assigment starts here

app.listen(3000, () => {
  console.log("Server is up on port no. 3000");
});

// port no. assigment ends here