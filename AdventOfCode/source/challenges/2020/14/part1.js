let lib = require('../../../lib');

let year = 2020;
let day = 14;

let mem = {};
let output = 0;

function applyMask(value, mask){
    let ret = [];
    for (let i = -1; i > -35; i--) {
        if(mask.charAt(mask.length + i) !== 'X'){
            ret[36 + i] = mask.charAt(mask.length + i);
        } else if(typeof value.charAt(value.length + i) !== 'undefined') {
            ret[36 + ii] = value.charAt(value.length + i);
        } else {
            ret[36 + ii] = 0;
        }
    }
    return ret.join('');
}

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let mask = '';
    for(let line of lines) {
        if(/[01X]{36}/.test(line)){
            mask = /[01X]{36}/.exec(line)[0]
            continue;
        } else {
            // we've found a value
            let lineSplit = line.split(' ')
            let memoryAddr = /\[\d*\]/.exec(lineSplit[0])[0].slice(1, -1);
            let binary = Number(/^[0-9]*$/.exec(lineSplit[2])[0]).toString(2)
            mem[memoryAddr] = applyMask(binary, mask);
        }
    }

    Object.keys(mem).forEach(elem => {
        output += Number(mem[elem]);
    });

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});