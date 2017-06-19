const express = require('express');
const router = express.Router();

// declare axios for making http requests
const mongojs = require('mongojs');
var db = mongojs('mongodb://justforex:ahdgmypnd20@ds157631.mlab.com:57631/justforex', ['users'])
var ObjectId = require('mongodb').ObjectId;

router.post('/', function(req, res, next) {
  var u = req.body;

  db.users.findOne({ $and: [ { username: { $eq: u.username} }, {password: { $eq: u.password} } ] }, function(err, user){
      if(err){
          res.send(err);
      }
      res.json(user);
  });
})

// Get All Users
router.get('/getall', function(req, res, next){
    db.users.find(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});

// Get Single Users
router.get('/get/:id', function(req, res, next){
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});

//Save User
router.post('/save', function(req, res, next) {
    var user = req.body;
    db.users.insert(user, function(err, user) {
      if(err){
        res.send(err);
      }
      res.json(user);
    })
});

module.exports = router;
