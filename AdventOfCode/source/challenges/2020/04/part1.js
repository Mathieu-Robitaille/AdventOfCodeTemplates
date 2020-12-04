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
    let byrRegex = /[12][90][0-9]{2}/
    let birthYear = parseInt(passport.byr);
    if(!(byrRegex.exec(passport.byr)) && !(betweenRange(birthYear, 1920, 2002))) return false;

    let issueYear = parseInt(passport.iyr);
    if(!(byrRegex.exec(passport.iyr)) && !betweenRange(issueYear, 2010, 2020)) return false;

    let expYear = parseInt(passport.eyr);
    if(!(byrRegex.exec(passport.eyr)) && !betweenRange(expYear, 2020, 2030)) return false;

    let heightRegexCM = /cm/;
    let heightRegexIN = /in/;
    let height = passport.hgt;
    if(heightRegexCM.exec(height)){
        if(!(betweenRange(parseInt(height.replace('cm', ''), 150, 193)))) return false;
    } else if (heightRegexIN.exec(height)) {
        if(!(betweenRange(parseInt(height.replace('in', ''), 59, 76)))) return false;
    } else {
        return false;
    }

    let hairColorRegex = /#[0-9a-f]{6}/
    if(!hairColorRegex.exec(passport.hcl)) return false;

    if(!(passport.ecl in ["amb", "blu", "brn", "gry", "grn", "hzl", "oth",])) return false;

    let passportIDRegex = /[0-9]{9}/
    if(!passportIDRegex.exec(passport.pid)) return false;

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