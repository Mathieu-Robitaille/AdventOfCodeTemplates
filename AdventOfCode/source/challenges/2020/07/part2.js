let lib = require('../../../lib');

let year = 2020;
let day = 07;

lib.getInput(year, day).then((data) => {

    let lines = data.split('\n');
    let allBags = {};
    for(let line of lines) {
        let outerBag = /(.*) bags contain /.exec(line)[1];
        let innerBags = line.replace(/.* bags contain /, '');
        let bags = innerBags.split(',');
        let children = [];

        for(let part of bags) {
            if(!/no other bags/.test(part)) {
                let res = /\s*(\d+)\s*(.*) bag/.exec(part);
                children.push({ colour: res[2], count: +res[1]});
            }
        }
        allBags[outerBag] = children;
    }

    let output = 0;

    let nodes = [];
    for(let child of allBags['shiny gold']) {
        nodes.push({mult: 1, rule: child});
    }

    for(let index = 0; index < nodes.length; index++) {
        let current = nodes[index];
        output += current.mult * current.rule.count;
        for(let rule of allBags[current.rule.colour]) {
            nodes.push({mult: current.rule.count * current.mult, rule})
        }
    }

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});