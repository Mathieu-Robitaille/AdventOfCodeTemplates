const lib = require('../../../lib/');

let year = 2020;
let day = 09;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n').map(p => +p);
    let result = 0;

    let valid = lines.slice(0, 25);
    for (let i = 25; i < lines.length; i++) {
        const line = lines[i];
        let match = false;
        for (let j = 0; j < 24; j++) {
            const element = valid[j];
            if(valid.includes(line - element) && valid.indexOf(line - element) !== valid.indexOf(element)){
                match = true;
                break;
            }
        }
        if(!match){
            result = line;
            break;
        }
        valid.shift()
        valid.push(line);   
    }

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", result);
}).catch((err) => {
    console.log(err, err.stack);
});