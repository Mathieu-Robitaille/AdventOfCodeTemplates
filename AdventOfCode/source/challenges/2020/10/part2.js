let lib = require('../../../lib');
let graph = require('../lib/nodeGraph');
const { performance } = require('perf_hooks')

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

    let v0 = performance.now();
    let result = nodeGraph.countPaths(1);
    let v1 = performance.now();

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", result, "and it only took", v1-v0, "to run!");
}).catch((err) => {
    console.log(err, err.stack);
});