let lib = require('../../../lib');

let year = 2020;
let day = 12;

let directions = ['north', 'east', 'south', 'west'];

function modulo(a, b){
    // Javascript is a stupid language that changed the modulo operator...
    // >:(
    return ((a % b) + b) % b
}

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let x = 0;
    let y = 0;
    let direction = 1;
    for(let line of lines) {
        headding = line.slice(0, 1);
        value = +line.slice(1);
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
                direction = modulo((direction - value / 90), 4)
                break;
            case 'R':
                direction = modulo((direction + value / 90), 4)
                break;
            case 'F':
                switch (direction) {
                    case 0:
                        y += value;
                        break;
                    case 1:
                        x += value;
                        break;
                    case 2:
                        y -= value;
                        break;
                    case 3:
                        x -= value;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
    let output = Math.abs(x) + Math.abs(y);
    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", output);
}).catch((err) => {
    console.log(err, err.stack);
});