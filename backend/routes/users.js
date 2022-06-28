var express = require('express');
const { Redirect } = require('react-router-dom');
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
    

    const userName = req.body.username; 
    const userEmail = req.body.email; 
    const userFirstName = req.body.first_name; 
    const userLastName = req.body.last_name; 
    const userPassword = req.body.password;


    collection.insert({
        "username" : userName,
        "email" : userEmail,
        "first_name" : userFirstName,
        "last_name" : userLastName,
        "password" : userPassword,
    },function(docs) {
        res.redirect('/')
    })
    
})


router.get("/:email", function(req,res) {
    const db = req.db;
    
    const userToFind = req.params.email;
    console.log(userToFind);


    const collection = db.get('users')
    collection.findOne({email : userToFind}, {},function(err,docs){
        if (docs) {
            res.send("AlreadyEmail")
        }
        else{
            res.send("il existe pas !!")
        }
    })
})




module.exports = router;