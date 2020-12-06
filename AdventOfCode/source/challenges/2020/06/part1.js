let lib = require('../../../lib');

let year = 2020;
let day = 06;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n\n');
    let output = 0;
    for(let line of lines) {
        output += String.prototype.concat(...new Set(line.replace(/\n/g, ''))).length;
    }
    
    console.log("-- Displaying output --");
    console.log(" |-", output);

    console.log("-- Writing output --");
    lib.writeOutput(output);
}).catch((err) => {
    console.log(err, err.stack);
});