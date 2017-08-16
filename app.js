const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require ("body-parser");
const expressValidator = require("express-validator");
const app = express();
let funk = ("./funk.js");

//Mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static("public"))

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

//To Do List
const data = {
  todos: ["Wash the car", "Buy soap"],
}


app.get('/', function (req, res) {
  res.render("todo", data);
});

app.post("/todos", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('complete');
})

app.listen(3000, function(){
  console.log("Mark that box!");
});
