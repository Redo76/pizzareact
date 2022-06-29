
var express = require('express');
var path = require('path');
const cors = require('cors');
const bp = require('body-parser')

// Database
var mongo = require("mongodb");
var monk = require("monk");

var db = monk("localhost:27017/Pizzas");

// var usersRouter = require('./routes/users');
const pizzasRouter = require('./routes/pizzas');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());

app.use(function(req,res,next){
  req.db = db;
  next();
  });

app.use('/pizzas', pizzasRouter);
app.use('/users', usersRouter)
app.use('/orders', ordersRouter)

app.listen(process.env.PORT || 8080);