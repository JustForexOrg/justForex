const express = require('express');
const router = express.Router();

// declare axios for making http requests
const mongojs = require('mongojs');
var db = mongojs('mongodb://justforex:ahdgmypnd20@ds157631.mlab.com:57631/justforex', ['users'])

router.post('/', function(req, res, next) {
  var u = req.body;

  db.users.findOne({ $and: [ { username: { $eq: u.username} }, {password: { $eq: u.password} } ] }, function(err, user){
      if(err){
          res.send(err);
      }
      res.json(user);
  });
})

module.exports = router;
