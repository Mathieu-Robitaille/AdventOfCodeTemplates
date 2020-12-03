let lib = require('../../../lib');

let year = 2020;
let day = 03;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let iter = 0;
    let output = 0;
    for(let line of lines) {
        iter += 3;
        if(line[iter % line.length] == "#") output++;
    }

    console.log("-- Displaying output --");
    console.log(output);

    console.log("-- Writing output --");
    lib.writeOutput(output);
}).catch((err) => {
    console.log(err, err.stack);
});