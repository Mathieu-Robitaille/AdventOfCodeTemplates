let lib = require('../../../lib');
let asm = require('../lib/asm');

let year = 2020;
let day = 08;

lib.getInput(year, day).then((data) => {
    let op = asm.parse(data);
    let changeIndex = 0;
    let result = 0;

    let loop = true;
    while(loop){
        let prog = op.clone();
        let state = prog.getState();
        while(state.ops[changeIndex].op === 'acc') {
            changeIndex++;
        }
        if(state.ops[changeIndex].op === 'nop') state.ops[changeIndex].op = 'jmp';
        if(state.ops[changeIndex].op === 'jmp') state.ops[changeIndex].op = 'nop';

        let visited = {};
        let innerLoop = true;

        while(innerLoop){
            let state = prog.getState();
            if(state.pointer >= state.ops.length){
                loop = false;
                innerLoop = false;
                result = state.accumulator;
                break;
            } else if(visited[state.pointer]) {
                innerLoop = false;
            } else {
                visited[state.pointer] = true;
                prog.step();
            }
        }
        changeIndex++;
    }
    
    console.log(" ╦ Displaying output ");
    console.log(" ╚> ", result);
}).catch((err) => {
    console.log(err, err.stack);
});