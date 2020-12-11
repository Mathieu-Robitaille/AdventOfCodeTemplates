let lib = require('../../../lib');

let year = 2020;
let day = 07;

let output = 0;

class securityBag{
    constructor(name, children){
        this.name = name;
        this.children = children;
    }
}

function checkBags(kid, allBags){
    for (let i = 0; i < allBags[kid].children.length; i++) {
        const element = allBags[kid].children[i][1];
        checkBags(element.name, allBags)
    }
    output++;
}

function buildBags(data){
    let allBags = {};
    let lines = data.split('\n');
    for(let line of lines) {
        let outerBag = /(.*) bags contain /.exec(line)[1];
        let innerBags = line.replace(/.* bags contain /, '');
        let children = [];

        for(let bag of innerBags.split(',')) {
            if(bag === "no other bags.") {
                continue;
            }
            // let regexmatch = /[0-9]/.exec(bag);
            let number = /[0-9]/.exec(bag)[0];
            let bagColor = /\s*\d+\s*(.*) bag/.exec(bag)[1]
        
            children.push([number, bagColor]);
        }
        allBags[outerBag] = new securityBag(outerBag, children);
    }
    
    Object.keys(allBags).forEach(key => {
        allBags[key].children.forEach((child, number) => {
            child[1] = allBags[child[1]];
        });
    });
    
    checkBags("shiny gold", allBags);
}

lib.getInput(year, day).then((data) => {

    buildBags(data);

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});