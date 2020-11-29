var express = require('express');
var { readdirSync } = require('fs');
var router = express.Router();


const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    var directories = getDirectories(__dirname);
    // res.render('index', { listing: directories });
    res.json(directories);
});

module.exports = router;
