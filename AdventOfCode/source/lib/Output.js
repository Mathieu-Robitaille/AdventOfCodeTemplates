let fs = require('fs');
let path = require('path');


function writeOutput(data){
    let currentDirectory = path.dirname(require.main.filename);
    let outputFileName = path.resolve(currentDirectory, 'output.txt');
        fs.stat(outputFileName, (err, stats) => {
        if(fs.existsSync(currentDirectory)) {
            fs.writeFile(outputFileName, data, (err) => {
                if(err) throw err;
                console.log(" |- Wrote ->", outputFileName);
            })
        } else {
            console.log(" |- >", currentDirectory)
            console.log(err);
        }
    });
}

function appendOutput(data){
    // change this to append
    let currentDirectory = path.dirname(require.main.filename);
    let outputFileName = path.resolve(currentDirectory, 'output.txt');
        fs.stat(outputFileName, (err, stats) => {
        if(fs.existsSync(currentDirectory)) {
            fs.appendFile(outputFileName, data, (err) => {
                if(err) throw err;
                console.log(" |- Wrote ->", outputFileName);
            })
        } else {
            console.log(" |- >", currentDirectory)
            console.log(err);
        }
    });
}

module.exports = writeOutput;
module.exports = appendOutput;