class Automata{
    constructor(data){
        let lines = data.split('\n');
        this.seats = lines.map(x => x.split(''));
        this.modifiedSeats = [];
    }

    validateCoords(x, y){
        if(x < 0 || y < 0) return false;
        if(x >= this.seats.length) return false;
        if(y >= this.seats[x].length) return false;
        return true;
    }

    directions = {
        // return true if you found something
        // This isnt really meant ot be the "best way" to do this
        // its just fun
        // 
        // NOTE: Yes this could esily be cut down
        // by creating an "init" function that does the repetitive stuff...
        // but i didnt, and this is for fun so fuck it
        // 
        // I'll probably change this later
        up: (x, y) => {
            let xx = x;
            let yy = y +1;
            if(!this.validateCoords(xx, yy)) return 0;
            if(this.seats[xx][yy] === '#') return 1;
            if(this.seats[xx][yy] === 'L') return 0;
            return this.directions.up(xx, yy);
        },
        down: (x, y) => {
            let xx = x;
            let yy = y -1;
            if(!this.validateCoords(xx, yy)) return 0;
            if(this.seats[xx][yy] === '#') return 1;
            if(this.seats[xx][yy] === 'L') return 0;
            return this.directions.down(xx, yy);
        },
        left: (x, y) => {
            let xx = x -1;
            let yy = y;
            if(!this.validateCoords(xx, yy)) return 0;
            if(this.seats[xx][yy] === '#') return 1;
            if(this.seats[xx][yy] === 'L') return 0;
            return this.directions.left(xx, yy);
        },
        right: (x, y) => {
            let xx = x +1;
            let yy = y;
            if(!this.validateCoords(xx, yy)) return 0;
            if(this.seats[xx][yy] === '#') return 1;
            if(this.seats[xx][yy] === 'L') return 0;
            return this.directions.right(xx, yy);
        },
        upleft: (x, y) => {
            let xx = x -1;
            let yy = y +1;
            if(!this.validateCoords(xx, yy)) return 0;
            if(this.seats[xx][yy] === '#') return 1;
            if(this.seats[xx][yy] === 'L') return 0;
            return this.directions.upleft(xx, yy)

        },
        upright: (x, y) => {
            let xx = x +1;
            let yy = y +1;
            if(!this.validateCoords(xx, yy)) return 0;
            if(this.seats[xx][yy] === '#') return 1;
            if(this.seats[xx][yy] === 'L') return 0;
            return this.directions.upright(xx, yy)
        },
        downleft: (x, y) => {
            let xx = x -1;
            let yy = y -1;
            if(!this.validateCoords(xx, yy)) return 0;
            if(this.seats[xx][yy] === '#') return 1;
            if(this.seats[xx][yy] === 'L') return 0;
            return this.directions.downleft(xx, yy)
        },
        downright: (x, y) => {
            let xx = x +1;
            let yy = y -1;
            if(!this.validateCoords(xx, yy)) return 0;
            if(this.seats[xx][yy] === '#') return 1;
            if(this.seats[xx][yy] === 'L') return 0;
            return this.directions.downright(xx, yy)
        },
    }

    countLongDistanceNeighbors(x, y){
        let count = 0;
        for(let rule of Object.keys(this.directions)){
            count += this.directions[rule](x, y);
        }
        return count;
    }

    countNeighbors(x, y){
        let count = 0;
        for (let i = x -1; i <= x +1; i++) {
            if(i < 0 || i >= this.seats.length) continue;
            for (let j = y -1; j <= y +1; j++) {
                if(j < 0 || j >= this.seats[i].length || (i === x && j === y)) continue;
                if(this.seats[i][j] === '#') count++;
            }
        }
        return count;
    }

    flipCell(x, y){
        if(this.seats[x][y] === 'L'){
            this.modifiedSeats[x][y] = '#';
        } else if (this.seats[x][y] === '#') {
            this.modifiedSeats[x][y] = 'L';
        }
    }

    rules = {
        part1: {
            // these return true if there is a flip to be made

            // If there are no neighbors flip the seat
            fillSeat: (x, y) => {
                if(this.seats[x][y] === 'L'){
                    if(this.countNeighbors(x, y) > 0) return false;
                    return true;
                }
            },

            // If there are 4 or more neighbors flip the seat
            emptySeat: (x, y) => {
                if(this.seats[x][y] === '#'){
                    if(this.countNeighbors(x, y) >= 4) return true;
                    return false
                }
            }
        },
        part2: {
            // If there are no neighbors flip the seat
            fillSeat: (x, y) => {
                if(this.seats[x][y] === 'L'){
                    if(this.countLongDistanceNeighbors(x, y) > 0) return false;
                    return true;
                }
            },

            // If there are 4 or more neighbors flip the seat
            emptySeat: (x, y) => {
                if(this.seats[x][y] === '#'){
                    if(this.countLongDistanceNeighbors(x, y) >= 5) return true;
                    return false
                }
            }
        }
    }
    runOnce(part='part1') {
        //  Wow i hate this: supposedly this is the only way to deep copy
        this.modifiedSeats = JSON.parse(JSON.stringify(this.seats));
        for (let i = 0; i < this.seats.length; i++) {
            for (let j = 0; j < this.seats[i].length; j++) {
                for(let rule of Object.keys(this.rules[part])){
                    if(this.rules[part][rule](i, j)){
                        this.flipCell(i, j);
                    }   
                }  
            }
        }
        if(JSON.stringify(this.modifiedSeats) === JSON.stringify(this.seats)){
            let result = 0;
            this.modifiedSeats.forEach(list => {
                list.forEach(seat => {
                    if(seat === '#') result++;
                });
            });
            return result;
        } else {
            this.seats = JSON.parse(JSON.stringify(this.modifiedSeats));
            return 0;
        }
    }

}

module.exports = {
    Automata,
}