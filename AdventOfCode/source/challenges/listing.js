var express = require('express');
var { readdirSync } = require('fs');
var path = require('path')
var router = express.Router();


const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

/* GET users listing. */
router.get('/', function(req, res, next) {
    var dirDict = {};

    getDirectories(__dirname).forEach(dir => {
      dirDict[dir] = getDirectories(path.resolve(__dirname, dir));
    });
    
    res.render('index', { 
      title: "Advent calendar code page",
      subtitle: "my minecraft server -- NO BULLIES! >:(",
      listing: dirDict,
      days: [Array.from({length:25},(v,k)=>k+1)],
    });
    // res.json(dirDict);
});



module.exports = router;
