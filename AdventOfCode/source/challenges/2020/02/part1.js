let lib = require('../../../lib');

let year = 2020;
let day = 02;

let valid = 0;

function validatePW(pw) { 

    // Mom ill clean my mess later!

    split = pw.split(' ');

    var occur = split[0];
    var min = +occur.split('-')[0];
    var max = +occur.split('-')[1];
    var character = split[1][0];
    var pass = split[2];
    
    var regex = new RegExp(character, "g");

    var count = (pass.match(regex) || []).length;

    console.log(min, " <= ", count, " <= ", max);
    
    if(+occur.split('-')[0] <= +count && +count <= +occur.split('-')[1]) {
        return true;
    } else { 
        return false;
    }
}

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    for(let line of lines) {
        if(validatePW(line)) valid++;
    }

    console.log(valid);
}).catch((err) => {
    console.log(err, err.stack);
});