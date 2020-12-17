let lib = require('../../../lib');

let year = 2020;
let day = 13;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let startTime = lines[0];
    let times = lines[1].split(',').filter(x => {
        if(x !== 'x') return +x;
    });
    let departTimes = {};
    times.forEach(time => {
        departTimes[(+time + (Math.floor(startTime / time) * time))] = time;
    });

    let id = Math.min(...Object.keys(departTimes));
    let output = (id - startTime) * departTimes[id];

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});