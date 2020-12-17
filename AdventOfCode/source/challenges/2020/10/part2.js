let lib = require('../../../lib');
let graph = require('../lib/nodeGraph');
const { performance } = require('perf_hooks');
const { link } = require('fs');

let year = 2020;
let day = 10;


lib.getInput(year, day).then((data) => {
    let lines = data.split('\n').map(x => +x).sort((a,b) => {return a-b;});
    lines.unshift(0);
    lines.push(Math.max(...lines) + 3);

    let linkers = {};
    for (let i = 0; i < lines.length; i++) {
        linkers[lines[i]] = 1;
    }

    for(let key of Object.keys(linkers)){
        let n1 = linkers[key];
        [].forEach(element => {
        });


        // Fuck you its in python now
        // numbers = [0] + numbers + [max(numbers) + 3]
        // linkers = {n: 1 for n in numbers}
        // for i, n1 in enumerate(numbers):
        //     for j in (i+2, i+3):
        //         if j < len(numbers) and numbers[j] - n1 <= 3:
        //             for n2 in numbers[j:]:
        //                 linkers[n2] += linkers[n1]
            
        // print(linkers[max(numbers)])


    }


    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", result, "and it only took", v1-v0, "to run!");
}).catch((err) => {
    console.log(err, err.stack);
});

// goal: 396857386627072