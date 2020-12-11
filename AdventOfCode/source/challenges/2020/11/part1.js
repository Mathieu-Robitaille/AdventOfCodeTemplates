let lib = require('../../../lib');

let year = 2020;
let day = 11;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    for(let line of lines) {
        
    }

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});