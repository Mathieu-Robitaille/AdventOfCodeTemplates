let lib = require('../../../lib');

let year = 2020;
let day = 01;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n').map(x=>+x);

    var a, b = 0;
    for(let line of lines) {
        if(lines.includes(2020 - +line)) {
            console.log(line);
            a = line;
            b = lines[lines.indexOf(2020 - a)];
            break;
        }
    }

    var output = a * b;
    console.log(output);

    console.log("-- Writing output --");
    lib.writeOutput(output);
}).catch((err) => {
    console.log(err, err.stack);
});