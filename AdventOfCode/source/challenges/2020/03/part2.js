let lib = require('../../../lib');

let year = 2020;
let day = 03;

function traverse(lines, x, y){
    let result = 0;
    for(i = 1; i <= lines.length; i++) {
        let line = String(lines[i]);
        if(i % y != 0) continue;
        if(line[(i * x) % line.length] === "#") result++;
    }
    return result;    
}

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let resultArray = [];
    for(let i of [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]) {
        resultArray.push(traverse(lines, i[0], i[1]));
    }
    
    let output = resultArray.reduce((a, b) => a * b);
    console.log("-- Displaying output --");
    console.log(output);

}).catch((err) => {
    console.log(err, err.stack);
});