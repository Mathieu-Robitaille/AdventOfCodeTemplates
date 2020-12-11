let lib = require('../../../lib');

let year = 2020;
let day = 07;

// 
// Horrible shit panik code
// 

class securityBag{
    constructor(name, children){
        this.name = name;
        this.children = children;
    }
}

function checkKid(kid, allBags){
    if(allBags[kid].children.length > 0){
        for (let i = 0; i < allBags[kid].children.length; i++) {
            const element = allBags[kid].children[i][1];
            if(element.name === "shiny gold") return true;
            if(checkKid(element.name, allBags) === true) return true;
        }
    }
    return false;
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
    
    //All this can be replaced by a loop over the dict without its multiplier, ill deal with that later
    //  This shit is pointless
    Object.keys(allBags).forEach(key => {
        allBags[key].children.forEach((child, number) => {
            child[1] = allBags[child[1]];
        });
    });

    //  This shit is pointless
    let validBags = 0;
    Object.keys(allBags).forEach(key => {
        if(key === "pale red") {
            console.log();
        }
        if(checkKid(key, allBags)) {
            validBags++;
        }
    });
    
    return validBags;
}

lib.getInput(year, day).then((data) => {

    let output = buildBags(data);

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});