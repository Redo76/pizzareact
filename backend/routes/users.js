var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

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


    bcrypt.genSalt(10, function(err,salt) {
        bcrypt.hash(userPassword, salt, function(err,hash) {
            collection.insert({
                "username" : userName,
                "email" : userEmail,
                "first_name" : userFirstName,
                "last_name" : userLastName,
                "password" : hash,
            },function(docs) {
                res.redirect('/')
            })
        })
    })  
})


router.get("/:email", function(req,res) {
    const db = req.db;
    
    const userToFind = req.params.email;

    console.log(req.body);

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


router.post("/connect", function(req,res) {
    const db = req.db;
    
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    const collection = db.get('users')
    collection.findOne({email : userEmail}, {},function(err,docs){
        if (docs) {
            bcrypt.compare(userPassword, docs.password, function(err, result) {
                if (result) {
                    delete docs.password
                    res.json(docs);
                }
                else{ 
                    res.send("WrongPassword")
                }})
        }
        else{
            res.send("il existe pas !!")
        }
    })
})


module.exports = router;