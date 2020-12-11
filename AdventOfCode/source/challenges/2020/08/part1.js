let lib = require('../../../lib');

let year = 2020;
let day = 08;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let output = 0;
    let ranCommands = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (i == 568){
            console.log()
        }
        if(ranCommands.indexOf(i) !== -1) {
            break
        };
        ranCommands.push(i);
        if(!/nop/.exec(line)) {
            if(/acc/.exec(line)){
                if(/-/.exec(line)){
                    output = output - +(/[0-9]+/.exec(line)[0]);
                } else {
                    output = output + +(/[0-9]+/.exec(line)[0]);
                }
            }
            if(/jmp/.exec(line)){
                if(/-/.exec(line)){
                    i = i - +(/[0-9]+/.exec(line)[0]) - 1;
                } else {
                    i = i + +(/[0-9]+/.exec(line)[0]) - 1;
                }
            }
        }
    }
        
    

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});