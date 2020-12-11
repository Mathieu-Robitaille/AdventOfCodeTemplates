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

        for(let bag of bags) {
            if(!/no other bags/.test(bag)){
                let res = /\s*\d+\s*(.*) bag/.exec(bag);
                children.push(res[1]);
            }
        }
        allBags[outerBag] = children;
    }

    let validChildren = ['shiny gold'];

    let output = [];
    for(let i = 0; i < validChildren.length; i++) {
        let child = validChildren[i];
        for(let bag in allBags) {
            if(allBags[bag].indexOf(child) !== -1 && output.indexOf(bag) === -1) {
                output.push(bag);
                validChildren.push(bag);
            }
        }
    }
    
    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});