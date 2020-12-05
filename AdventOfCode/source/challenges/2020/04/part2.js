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

function betweenRange(string, startingRange, endingRange){
    return (string >= startingRange && endingRange >= string) ? true : false;
}

function vaildatePassport(passport) {
    let yearRegex = /[12][90][0-9]{2}/
    if(yearRegex.exec(passport.byr) !== null){
        if(!(betweenRange(parseInt(passport.byr), 1920, 2002))){
            return false;
        }
    }  

    if(yearRegex.exec(passport.iyr) !== null){ 
        if(!(betweenRange(parseInt(passport.iyr), 2010, 2020))) {
            return false;
        }
    }

    if(yearRegex.exec(passport.eyr) !== null) {
        if(!betweenRange(parseInt(passport.eyr), 2020, 2030)) {
            return false;
        }
    }

    let heightRegexCM = /cm/;
    let heightRegexIN = /in/;

    if(heightRegexCM.exec(passport.hgt)){
        if(!(betweenRange(parseInt(passport.hgt.replace('cm', '')), 150, 193))) return false;
    } else if (heightRegexIN.exec(passport.hgt)) {
        if(!(betweenRange(parseInt(passport.hgt.replace('in', '')), 59, 76))) return false;
    } else {
        return false;
    }

    let hairColorRegex = /#[0-9a-f]{6}/
    if(!hairColorRegex.exec(passport.hcl)) return false;

    let eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth",];
    if(!(eyeColors.includes(passport.ecl))) return false;

    let passportIDRegex = /[0-9]{9}/
    if(!(passportIDRegex.exec(passport.pid)) && passport.pid.length === 9) return false;

    return true;
}

function vaildateLength(passport) {
    // if its less than 7 auto disqualify it
    // cid is optional but none of the others are
    let len = Object.keys(passport).length;
    switch (len) {
        case 8:
            return vaildatePassport(passport);
        case 7:
            // if theres 7 things in the dict and cid is one of them
            // theres 6 of the 7 req things in the dict
            if("cid" in passport) return false;
            return vaildatePassport(passport);
        default:
            return false;
    }
}

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n\n').map((item) => {
        return String(item).replace(/\n/g, ' ');
    });
    let buffer = {};
    let output = 0;
    for(let line of lines) {
        for(let field of line.split(' ')){
            let splitVals = field.split(":")
            buffer[splitVals[0]] = splitVals[1];
        }
        if (vaildateLength(buffer)) output++;
        buffer = {};
    }

    console.log("-- Displaying output --");
    console.log(" |-", output);

    console.log("-- Writing output --");
    lib.writeOutput(buffer);
}).catch((err) => {
    console.log(err, err.stack);
});