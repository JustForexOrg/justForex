var express = require('express');
const router = express.Router();

// declare axios for making http requests
const mongojs = require('mongojs');

var db = mongojs('mongodb://justforex:ahdgmypnd20@ds157631.mlab.com:57631/justforex', ['graphData'])

var path = require('path');
var ObjectId = require('mongodb').ObjectId;

//Get graph by project ID
router.get('/:id', function(req, res, next) {
  db.graphData.findOne({project_id: req.params.id}, function(err, graphs){
      if(err){
          res.send(err);
      }
      res.json(graphs);
  });
})

module.exports = router;
