const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require ("body-parser");
const expressValidator = require("express-validator");
const app = express();
// let funk = ("./funk.js");

//Mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use("/css", express.static("public"));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

//To Do List
const list = [
  {
    todo: "Wash the dishes",
    yetTodo: true
  }, {
    todo: "Cut grass",
    yetTodo: false
  }, {
    todo: "Get dog food",
    yetTodo:true
  }, {
    todo: "Pick up",
    yetTodo:false
  }
];

const data = {
  todos:list
};

app.get('/completed', function (req, res) {
  res.render("todo", data);
});


app.post("/completed", function(req,res){
  list.push({todo: req.body.todo, yetTodo:true});
  res.redirect("/completed")
});


app.post("/completed", function(req,res){
let completed =req.body.completed;
function findTodo(item){
  return item.todo ===completed;}
  list.find(findTodo).yetTodo= false;
  res.redirect("/completed");
});

app.listen(3000, function(){
  console.log("Mark that box!");
});
