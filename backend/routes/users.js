var express = require('express');
const { Redirect } = require('react-router-dom');
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
    
    async function hashIt(password){
        const salt = await bcrypt.genSalt(6);
        const hashed = await bcrypt.hash(password, salt);
    }


    const userName = req.body.username; 
    const userEmail = req.body.email; 
    const userFirstName = req.body.first_name; 
    const userLastName = req.body.last_name; 
    const userPassword = hashIt(req.body.password);

    console.log(userPassword);
    console.log(req.body.password);


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