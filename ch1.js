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

function ch1_7() {
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
}

ch1_7();

function ch1_8() {
    // Solution 1.8
    let m = [];
    m[0] = [1, 1, 1];
    m[1] = [1, 0, 1];
    m[2] = [1, 1, 1]

    let m2 = [];
    m[0] = [1, 0, 0];
    m[1] = [1, 1, 1];
    m[2] = [1, 0, 1]

    function zeroRowCols(m) {
        let map = {
            rows: new Set(),
            cols: new Set()
        }

        for (let i=0; i<m.length; i++){
            for (let j=0; j < m[i].length; j++){
                if (m[i][j] === 0) {
                    map.rows.add(i);
                    map.cols.add(j);
                }
            }
        }

        clearRows(m, map.rows);
        clearCols(m, map.cols);

        return m;
    }

    function clearRows(m, rows) {
        for (let rowIdx of rows) {
            let row = m[rowIdx];
            for (let j=0; j < row.length; j++){
                row[j] = 0;
            }
        }
    }

    function clearCols(m, cols) {
        for (let i=0; i<m.length; i++) {
            for (let colIdx of cols) {
                m[i][colIdx] = 0;
            }
        }
    }

    printMatrix(zeroRowCols(m));
    printMatrix(zeroRowCols(m2));
}

ch1_8();