var express = require('express');
var router = express.Router();
var path = require('path');

router.get('', function(req, res, next){
    res.sendFile(path.join(__dirname, '..', '/index.html'), function(err) {
        if (err) {
            res.status(err.status).end();
        }
    );
});

module.exports = router;
