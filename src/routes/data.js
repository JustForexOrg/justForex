var express = require('express');
var router = express.Router();

const mongojs = require('mongojs');
var db = mongojs('mongodb://justforex:ahdgmypnd20@ds157631.mlab.com:57631/justforex', ['graphData'])

router.get('/:id', function(req, res, next){
    // request('https://www.doc.ic.ac.uk/~dsg115/test.php?callback=?', function(err, response, body) {
    //   if (err || response.statusCode !== 200) {
    //     return res.sendStatus(500);
    //   }
    //   // res.setHeader('content-type', 'text/javascript');
    //   // res.contentType = "text/javascript";
    //   res.json(body);
    // })
    db.graphData.findOne({_id: mongojs.ObjectsId(req.params.id)}, function(err, list) {
      console.log(list);
    });
});

module.exports = router;
