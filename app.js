const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require ("body-parser");
const expressValidator = require("express-validator");
const app = express();

//Mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static("public"))

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

const todos = [
  "Wash the car", "Buy soap"
];

app.get('/', function (req, res) {
  res.render("index", {todos:todos});
});

app.post("/complete", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('complete');
})

app.listen(3000, function(){
  console.log("Here is your personal data");
});
