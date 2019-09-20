class Matrix {
    constructor(rows, cols, vals = null) {
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

        this.m = m;
    }

    print() {
        let string = '';
        for (let i = 0; i<this.m.length; i++) {
            for (let j = 0; j<this.m[0].length; j++) {
                string = string.concat(this.m[i][j], ' ');
            }
            string = string.concat('\n');
        }
        console.log(string);
    }
}

let vals = [0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
let m = new Matrix(5, 5, vals);
m.print()