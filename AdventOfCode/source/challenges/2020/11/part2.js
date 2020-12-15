let lib = require('../../../lib');
let cell = require('../lib/cellularAutomata');

let year = 2020;
let day = 11;

lib.getInput(year, day).then((data) => {
    let cellautomata = new cell.Automata(data);
    let output = 0;
    while(output === 0){
        output = cellautomata.runOnce('part2')
    }

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});