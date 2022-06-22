
var express = require('express');
var path = require('path');
const cors = require('cors');

// Database
var mongo = require("mongodb");
var monk = require("monk");

var db = monk("localhost:27017/Pizzas");

// var usersRouter = require('./routes/users');
var pizzasRouter = require('./routes/pizzas');

const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());

app.use(function(req,res,next){
  req.db = db;
  next();
  });

app.use('/pizzas', pizzasRouter);
// app.use('/users', usersRouter);

app.listen(process.env.PORT || 8080);