let lib = require('../../../lib');

let year = 2020;
let day = 06;

lib.getInput(year, day).then((data) => {
    let groups = data.split('\n\n');
    let output = 0;
    for(let group of groups) {
        if(group.split('\n').length == 1) {
            output += group.length;
            continue;
        }
        let nl = group.replace(/\n/g, '');
        let uniq = String.prototype.concat(...new Set(nl));
        for(let char of uniq){
            let occur = 0;
            let splitGroups = group.split('\n');
            for(let line of splitGroups) {
                if(line.includes(char)) occur += 1;
            }
            if(occur == splitGroups.length){
                output += 1;
            }
        }
    }

    console.log("-- Displaying output --");
    console.log(" |-", output);

    console.log("-- Writing output --");
    lib.writeOutput(output);
}).catch((err) => {
    console.log(err, err.stack);
});