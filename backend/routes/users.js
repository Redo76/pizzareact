var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    const db = req.db;
    const collection = db.get('users');
    collection.find({}, {}, function (err, docs) {
        res.json(docs);
    });
  });

router.post('/adduser', function(req, res) {
    const db = req.db;
    const collection = db.get('users');

    console.log(req.body);

    const userName = req.body.username; 
    const userEmail = req.body.email; 
    const userFirstName = req.body.firstName; 
    const userLastName = req.body.lastName; 
    const userPassword = req.body.password;


    collection.insert({
        "username" : userName,
        "email" : userEmail,
        "first_name" : userFirstName,
        "last_name" : userLastName,
        "password" : userPassword,
    },function(docs) {
        res.json(docs)
    })
    
})

module.exports = router;