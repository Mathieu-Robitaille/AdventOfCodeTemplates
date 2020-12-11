let lib = require('../../../lib');

let year = 2020;
let day = 02;

function validatePW(pw) { 

    // Mom ill clean my mess later!

    // split the passwd string into segments for cleaner handling further on
    split = pw.split(' ');

    // the first segment represents the indexes (not zero based, note the -1)
    let posOne = +split[0].split('-')[0] - 1;
    let posTwo = +split[0].split('-')[1] - 1;

    // the second segment is the character
    let character = split[1][0];

    // the third egment is the string to evaluate
    let pass = split[2];
    
    // Check if the index is the char it is supposed to be
    let firstChar = pass[posOne] == character ? true : false;
    let secondChar = pass[posTwo] == character ? true : false;

    // XOR them together, return the result
    if(firstChar != secondChar) {
        return true;
    } else { 
        return false;
    }
}

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let valid = 0;

    for(let line of lines) {
        // Pass the line to a function for easier reading
        if(validatePW(line)) {
            valid++;
        }
    }

    console.log(valid);
    console.log("-- Writing output --");
    lib.writeOutput(valid);
}).catch((err) => {
    console.log(err, err.stack);
});