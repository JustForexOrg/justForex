const express = require('express');
const router = express.Router();

// declare axios for making http requests
const mongojs = require('mongojs');
var db = mongojs('mongodb://justforex:ahdgmypnd20@ds157631.mlab.com:57631/justforex', ['tasks'])
var ObjectId = require('mongodb').ObjectId;

// Get All Tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

// Get Single Tasks
router.get('/tasks/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

//Get Task based on user_id
router.get('/users/:id', function(req, res, next) {
  var u = req.body;

  db.tasks.find({user_id: req.params.id}, function(err, project) {
      if(err){
          res.send(err);
      }

      res.json(project);
  });
})

//Save Tasks
router.post('/task', function(req, res, next) {
    var task = req.body;

    if(!task.text) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, function(err, task) {
            if(err){
                res.send(err);
            }
            res.json(task);
        })
    }
});

//Delete tasks
router.delete('/tasks/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectsId(req.params.id)}, function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

module.exports = router;
