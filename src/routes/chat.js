const express = require('express');
const router = express.Router();

// declare axios for making http requests
const mongojs = require('mongojs');
var db = mongojs('mongodb://justforex:ahdgmypnd20@ds157631.mlab.com:57631/justforex', ['chat']);

// Get All Chat
router.get('/all', function(req, res, next){
    db.chat.find(function(err, chat){
        if(err){
            res.send(err);
        }
        res.json(chat);
    });
});

// Get Single Chat
router.get('/:id', function(req, res, next){
db.chat.findOne({_id: mongojs.ObjectsId(req.params.id)}, function(err, chat){
        if(err){
            res.send(err);
        }
        res.json(chat);
    });
});

//Save Chat
router.post('/save', function(req, res, next) {
    var c = req.body;

    if(!c.text) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.chat.save(c, function(err, ch) {
            if(err){
                res.send(err);
            }
            res.json(ch);
        })
    }
});

//Delete Chat
router.delete('/delete/:id', function(req, res, next){
    db.chat.remove({_id: mongojs.ObjectsId(req.params.id)}, function(err, chat){
        if(err){
            res.send(err);
        }
        res.json(chat);
    });
});

module.exports = router;