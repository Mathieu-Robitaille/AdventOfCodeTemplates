let lib = require('../../../lib');

let year = {{year}};
let day = {{day}};

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    for(let line of lines) {
        
    }

    console.log("-- Displaying output --");
    console.log(output);

    console.log("-- Writing output --");
    lib.writeOutput(output);
}).catch((err) => {
    console.log(err, err.stack);
});