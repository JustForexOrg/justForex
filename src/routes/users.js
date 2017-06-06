const express = require('express');
const router = express.Router();

// declare axios for making http requests
const mongojs = require('mongojs');
var db = mongojs('mongodb://justforex:ahdgmypnd20@ds157631.mlab.com:57631/justforex', ['users'])

// Get All Users
router.get('/users', function(req, res, next){
    db.users.find(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});

// Get Single Users
router.get('/users/:id', function(req, res, next){
    db.users.findOne({_id: mongojs.ObjectsId(req.params.id)}, function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});

//Save User
router.post('/user', function(req, res, next) {
    var user = req.body;

    if(!user.text) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.users.save(user, function(err, user) {
            if(err){
                res.send(err);
            }
            res.json(user);
        })
    }
});

//Delete users
router.delete('/users/:id', function(req, res, next){
    db.users.remove({_id: mongojs.ObjectsId(req.params.id)}, function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});

module.exports = router;
