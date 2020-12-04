let lib = require('../../../lib');

let year = 2020;
let day = 04;

let codes = [
    "byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
    // "cid", its optional so why check?
]

function vaildatePassport(passport) {
    // if its less than 7 auto disqualify it
    // cid is optional but none of the others are
    let len = Object.keys(passport).length;
    switch (len) {
        case 8:
            return true;
        case 7:
            // if theres 7 things in the dict and cid is one of them
            // theres 6 of the 7 req things in the dict
            if("cid" in passport) return false;
            for(let code of codes){
                if(!(code in passport)) return false;
            }
            return true;
        default:
            return false;
    }
}

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let buffer = {};
    let output = 0;
    for(let line of lines) {
        if(line.length >= 1) {
            for(let field of line.split(' ')){
                let splitVals = field.split(":")
                buffer[splitVals[0]] = splitVals[1];
            }
        } else {
            if (vaildatePassport(buffer)) output++;
            buffer = {};
        }
    }

    console.log("-- Displaying output --");
    console.log(" |-", output);

    console.log("-- Writing output --");
    lib.writeOutput(buffer);
}).catch((err) => {
    console.log(err, err.stack);
});