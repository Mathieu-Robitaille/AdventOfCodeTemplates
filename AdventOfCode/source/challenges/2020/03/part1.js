let lib = require('../../../lib');

let year = 2020;
let day = 03;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let output = 0;
    for(i = 1; i <= lines.length; i++) {
        let line = String(lines[i]);
        if(line[i * 3 % line.length] === "#") output++;
    }

    console.log("-- Displaying output --");
    console.log(" |-", output);

    console.log("-- Writing output --");
    lib.writeOutput(output);
}).catch((err) => {
    console.log(err, err.stack);
});