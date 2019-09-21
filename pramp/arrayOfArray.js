// impl of in place
function arrayOfArrayInPlace(arr) {
    let prodArr = [];
    for (let i=0; i<arr.length; i++) {
        let prod = 1;
        let left = i-1, right=i+1;
        while (left >= 0) {
            prod *= arr[left];
            left--;
        }

        while (right < arr.length) {
            prod *= arr[right];
            right++;
        }
        prodArr.push(prod);
    }
    return prodArr;
}

// matrix impl
function arrayOfArrayMatrixCalc(arr) {
    let arrMatrix = [];

    // this creates a matrix with 1 on the diagonal
    for (let i = 0; i<arr.length; i++) {
        arrMatrix[i] = [];
        for (let j=0; j<arr.length; j++) {
            if (i === j) {
                arrMatrix[i][j] = 1;
            } else {
                arrMatrix[i][j] = arr[j];
            }
        }
    }

    return arrMatrix.map(a => a.reduce((n,m) => n*m));
}

function measurePerformance(fn) {
    // https://stackoverflow.com/questions/48768758/measure-process-time-with-node-js
    const NS_PER_SEC = 1e9;
    const MS_PER_NS = 1e-6;
    const time = process.hrtime();
    fn();
    const diff = process.hrtime(time);
    console.log((diff[0] * NS_PER_SEC + diff[1])  * MS_PER_NS);
}

let fn1 = () => console.log(arrayOfArrayInPlace([2,3,4,5]));
let fn2 = () => console.log(arrayOfArrayMatrixCalc([2,3,4,5]));
measurePerformance(fn1);
measurePerformance(fn2);

console.log('\n');

let bigArr = [];
for (let i=1; i<= 100; i++) {
    bigArr.push(i);
};

fn1 = () => arrayOfArrayInPlace(bigArr);
fn2 = () => arrayOfArrayMatrixCalc(bigArr);

measurePerformance(fn1);
// Because matrix calc is O(n^2), it will take longer with larger arr lengths
measurePerformance(fn2);