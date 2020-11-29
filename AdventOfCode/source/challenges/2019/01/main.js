let lib = require('../../../lib');

let year = 2019;
let day = 01;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let total = 0;
    lines.forEach(element => {
        total += Math.floor(element/3) - 2;
    });

    console.log("Total -> ", total);

    console.log("-- Writing output --");
    lib.writeOutput(String(total), year, day);
}).catch((err) => {
    console.log(err, err.stack);
});