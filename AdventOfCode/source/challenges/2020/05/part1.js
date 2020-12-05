let lib = require('../../../lib');

let year = 2020;
let day = 05;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let seats = [];
    for(let line of lines) {
        let finalnumber = 0;
        let seat = 0;
        for(i = 6; i >= 0; i--) {
            if(line[9 - 3 - i] == 'B'){
                finalnumber += 2**i;
            }
        }
        for(i = 3; i >= 0; i--) {
            if(line[9 - i] == 'R'){
                seat += 2**i;
            }
        }
        seats.push(finalnumber * 8 + seat);
    }

    let output = Math.max(...seats)
    console.log("-- Displaying output --");
    console.log(" |-", output);

    console.log("-- Writing output --");
    lib.writeOutput(output);
}).catch((err) => {
    console.log(err, err.stack);
});