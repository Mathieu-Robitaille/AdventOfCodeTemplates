let lib = require('../../../lib');

let year = 2020;
let day = 01;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n').map(x=>+x);

    var a = 0,
        b = 0,
        c = 0,
        iter = 0;
    for(let lineA of lines) {
        for(let lineB of lines) {
            iter++; 
            if(lineA == lineB) continue;
            if(lines.includes(2020 - +lineA - +lineB)) {
                a = lineA;
                b = lineB;
                c = 2020 - a - b;
                break;
            }
        }
        if(a != 0) break;
    }

    var output = a * b * c;

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});