let lib = require('../../../lib');

let year = 2020;
let day = 12;

let shipx = 0;
let shipy = 0;
let x = 10;
let y = 1;
let xx =0;
let yy =0;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    for(let line of lines) {
        let headding = line.slice(0, 1);
        let value = +line.slice(1);
        switch (headding) {
            case 'N':
                y += value;
                break;
            case 'S':
                y -= value;
                break;
            case 'E':
                x += value;
                break;
            case 'W':
                x -= value;
                break;
            case 'L':
                switch (value) {
                    // L90 is the same as R270
                    // L180 and R180 are the same thing
                    // L270 and R270 are the same
                    // you could probably save some trouble by squishing both of these codes into the 
                    // same switch statement, but this is more readable, its clear what eachone is doing
                    case 90:
                        xx = -y;
                        yy = x;
                        x = xx;
                        y = yy;                        
                        break;
                    case 180:
                        x = -x;
                        y = -y;
                        break;
                    case 270:
                        xx = y;
                        yy = -x;
                        x = xx;
                        y = yy;
                        break;
                    default:
                        break;
                }
                break;
            case 'R':
                switch (value) {
                    case 90:
                        xx = y;
                        yy = -x;
                        x = xx;
                        y = yy;
                        break;
                    case 180:
                        x = -x;
                        y = -y;
                        break;
                    case 270:
                        xx = -y;
                        yy = x;
                        x = xx;
                        y = yy;
                        break;
                    default:
                        break;
                }
                break;
            case 'F':
                shipx += value * x;
                shipy += value * y;
                break;
            default:
                break;
        }
    }

    let output = Math.abs(shipx) + Math.abs(shipy);

    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});