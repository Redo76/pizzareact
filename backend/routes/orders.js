var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    const db = req.db;
    const collection = db.get('orders');
    collection.find({}, {}, function (err, docs) {
        res.json(docs);
    });
});

router.post("/addOrder", (req, res) =>{
    const db = req.db;


    const collection = db.get('orders');
    collection.insert(req.body,{},(err,docs)=>{
        res.json(docs);
    })
})


module.exports = router;


