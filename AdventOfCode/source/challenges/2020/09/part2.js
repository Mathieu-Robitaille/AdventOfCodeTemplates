const lib = require('../../../lib/');

let year = 2020;
let day = 09;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n').map(p => +p);
    let target = 0;

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
            target = line;
            break;
        }
        valid.shift()
        valid.push(line);   
    }

    let accumulator = 0;
    for (let i = 0; i < lines.length; i++) {
        accumulator = 0;
        let subIndex = i;
        while(accumulator < target){
            accumulator += lines[subIndex];
            subIndex++;
        }
        if(accumulator === target){
            let seg = lines.slice(i, subIndex)
            accumulator = Math.min(...seg) + Math.max(...seg);
            break;
        }
    }

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", accumulator);
}).catch((err) => {
    console.log(err, err.stack);
});