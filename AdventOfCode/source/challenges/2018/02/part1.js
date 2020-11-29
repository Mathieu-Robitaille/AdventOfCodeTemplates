let lib = require('../../../lib');

let year = 2018;
let day = 02;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    for(let line of lines) {
        
    }

    console.log("-- Writing output --");
    lib.writeOutput(output);
}).catch((err) => {
    console.log(err, err.stack);
});