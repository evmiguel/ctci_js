function  createMatrix(rows, cols, vals = null) {
    let m = [];
    let valsIdx = 0;

    // initialize
    for (let i = 0; i<rows; i++) {
        m[i] = [];
        for (let j = 0; j<cols; j++) {
            let val = null;
            if (vals) val = vals[valsIdx];
            m[i][j] = val;
            valsIdx++;
        }
    }

    return m
}

function printMatrix(m) {
    let string = '';
    for (let i = 0; i<m.length; i++) {
        for (let j = 0; j<m[0].length; j++) {
            string = string.concat(m[i][j], ' ');
        }
        string = string.concat('\n');
    }
    console.log(string);
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let vals = [0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
let m = createMatrix(5, 5, vals);
printMatrix(m)

function getMatrixIslands(m) {
    let islands = 0;
    for (let i=0; i<m.length; i++) {
        for (let j = 0; j<m[0].length; j++){
            if (m[i][j] === 1) {
                checkAndMarkNeighbors(m, i, j);
                islands++;
            }
        }
    }

    function checkAndMarkNeighbors(m, i, j) {
        m[i][j] = -1;
        
        // check left
        let leftCoords = new Point(i-1, j);
        if (leftCoords.x >= 0 && m[leftCoords.x][leftCoords.y] > 0) {
            checkAndMarkNeighbors(m, leftCoords.x, leftCoords.y);
        }

        // check right
        let rightCoords = new Point(i+1, j);
        if (rightCoords.x < m[0].length && m[rightCoords.x][rightCoords.y] > 0) {
            checkAndMarkNeighbors(m, rightCoords.x, rightCoords.y);
        }

        // check up
        let upCoords = new Point(i, j+1);
        if (upCoords.y >=0 && m[upCoords.x][upCoords.y] > 0) {
            checkAndMarkNeighbors(m, upCoords.x, upCoords.y);
        }

        // check down
        let downCoords = new Point(i, j-1);
        if (downCoords.y < m.length && m[downCoords.x][downCoords.y] > 0) {
            checkAndMarkNeighbors(m, downCoords.x, downCoords.y);
        }
    }

    return islands;
}

console.log(getMatrixIslands(m));
let m2 = createMatrix(2, 2, [1,0,0,1]);
printMatrix(m2)
console.log(getMatrixIslands(m2))
