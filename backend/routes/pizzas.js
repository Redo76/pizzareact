
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    const db = req.db;
    const collection = db.get('Pizzas');
    collection.find({}, {}, function (err, docs) {
        res.json(docs);
    });
  });

module.exports = router;