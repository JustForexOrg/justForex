var express = require('express');
var router = express.Router();

//require multer for the file uploads
var multer = require('multer');
var DIST = './uploads/'
// set the directory for the uploads to the uploaded to
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({dest: DIST}).single('photo');
/* GET home page. */

//our file upload function.
router.post('/', function (req, res, next) {
     var path = '';
     upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }
       // No error occured.
        path = req.file.path;
        return res.send("Upload Completed for "+path);
  });
})

module.exports = router;
