let lib = require('../../../lib');
let graph = require('../lib/nodeGraph');

let year = 2020;
let day = 10;


lib.getInput(year, day).then((data) => {
    let lines = data.split('\n').map(x => +x).sort((a,b) => {return a-b;});
    let nodeGraph = new graph.Graph();
    let finalNode = Math.max(...lines);
    for(let i of lines) {
        for(let j of lines.filter(x => { if(Math.abs(x - i) <= 3 && x !== i && x > i) return x; })) {
            nodeGraph.addEdge(i, j);
        }
    }
    let path = nodeGraph.dfsRecursive(1);
    let resultOne = 1;
    let resultThree = 1;
    path.forEach((element, index, array) => {
        if(Math.abs(element - array[index + 1]) === 1) resultOne++;
        if(Math.abs(element - array[index + 1]) === 3) resultThree++;
    });

    console.log();

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", resultOne * resultThree);
}).catch((err) => {
    console.log(err, err.stack);
});