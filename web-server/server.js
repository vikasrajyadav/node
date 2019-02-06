const express = require("express");

var app = express();

app.use(express.static(__dirname+'/public'))

app.get("/", (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: "andrew",
    likes: ["Biking", "cities"]
  });
});

app.get("/about", (req, res) => {
  res.send("hello! this is a about page");
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Unable to handle the request"
  });
});

app.listen(3000,()=>{
    console.log('Server is up on port no. 3000');
});
