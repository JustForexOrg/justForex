var express = require('express');
var router = express.Router();
var path = require('path');

var request = require('request');

router.get('*', function(req, res, next){
    request('https://www.highcharts.com/samples/data/jsonp.php?filename=msft-c.json&callback=?', function(err, response, body) {
      if (err || response.statusCode !== 200) {
        return res.sendStatus(500);
      }
      res.json(body);
    })
});

module.exports = router;
