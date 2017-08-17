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
    todo: "Wash the car",
    yetTodo: true
  }, {
    todo: "Fold laundry",
    yetTodo: false
  }, {
    todo: "Do the dishes",
    yetTodo:true
  }, {
    todo: "Pay the bills",
    yetTodo:false
  }
];

const data = {
  todos:list
};

app.get('/', function (req, res) {
  res.render("todo", data);
});


app.post("/", function(req,res){
  list.push({todo: req.body.todo, yetTodo:true});
  res.redirect("/")
});


app.post("/complete", function(req,res)){
  console.log(req.body);
let completed =req.body.complete;
function findTodo(item){
  return item.todo ===completed;}
  console.log(list.find(findTodo));
  list.find(findTodo).yetTodo= false;
  res.redirect("/");
}

app.listen(3000, function(){
  console.log("Mark that box!");
});
