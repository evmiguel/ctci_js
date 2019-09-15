// Solution for Chapter 1 #1.7

function populateMatrix(){
    let matrix = [], scalar = 0;
    for (let i=0; i<3; i++){
        matrix[i] = [];
        for (let j=0; j<3; j++){
            matrix[i][j] = ++scalar;
        }
    }

    return matrix;
}

function populateMatrixWithZeros(){
    let matrix = [], scalar = 0;
    for (let i=0; i<3; i++){
        matrix[i] = [];
        for (let j=0; j<3; j++){
            matrix[i][j] = scalar;
        }
    }

    return matrix;
}


function printMatrix(m) {
    let string = '';
    for (let i = 0; i< m.length; i++) {
        let row = m[i];
        for (let j=0; j<row.length; j++) {
            string = `${string} ${row[j]}`;
        }
        string = `${string} \n`
    }
    console.log(string);
}

function swapInMatrix(m, i, j){
    let current = m[i][j];
    let toSwap = m[j][i];
    m[i][j] = toSwap;
    m[j][i] = current;
}

function markVisited(m, i, j){
    m[i][j] = 1;
    m[j][i] = 1;
}

function rotateMatrix(m) {
    let visited = populateMatrixWithZeros();
    for (let i = 0; i < m.length; i++){
        for (let j=0; j< m[i].length; j++) {
            if (i !== j && !visited[i][j]) {
                swapInMatrix(m, i, j);
                markVisited(visited, i, j);
            }
        }
    }
    return m;
}

let m = populateMatrix();
printMatrix(m)
printMatrix(rotateMatrix(m));



