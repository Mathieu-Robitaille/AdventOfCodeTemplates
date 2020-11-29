let lib = require('../../../lib');

let year = 2019;
let day = 01;

lib.getInput(year, day).then((data) => {
    let lines = data.split('\n');
    let total = 0;
    let totalWithFuel = 0;
    lines.forEach(element => {
        total += Math.floor(element/3) - 2;
    });

    lines.forEach(element => {
        var initialWeight = 0;
        var fuelForWeight = Math.floor(element/3) - 2;
        while(fuelForWeight > 0) {
            initialWeight += fuelForWeight;
            fuelForWeight = Math.floor(fuelForWeight/3) - 2;
        }
        totalWithFuel += initialWeight;
    });

    console.log("Fuel for modules -> ", total);
    console.log("Fuel for modules and fuel -> ", totalWithFuel);

    console.log("-- Writing output --");
    lib.writeOutput(String(total));
}).catch((err) => {
    console.log(err, err.stack);
});