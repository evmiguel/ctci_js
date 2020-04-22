function binarySearchIterative(arr, x) {
    let low = 0;
    let high = arr.length;
    let mid;

    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(arr[mid] < x) {
            low = mid + 1;
        } else if (arr[mid] > x) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function binarySearchRecursive(arr, x, low, high) {
    if (low > high) return -1;

    let mid = Math.floor((low + high)/2);
    if (arr[mid] < x) {
        return binarySearchRecursive(arr, x, mid+1, high);
    } else if (arr[mid] > x) {
        return binarySearchRecursive(arr, x, low, mid-1);
    } else {
        return mid;
    }
}

function shiftedArraySearch(arr, num) {
    function findPivot(){
        let low = 0;
        let high = arr.length - 1;
        
        while (low <= high) {
            let mid = Math.floor((low+high)/2);
            if (mid === 0 || arr[mid] < arr[mid - 1]){
                return mid;
            } else if (arr[0] < arr[mid]) {
                low = mid + 1;
            } else {
                high = mid - 1; // arr[0] > arr[mid]
            }
        }

        return 0;
    }
    let pivot = findPivot();
    if (pivot === 0 || num < arr[0]) {
        return binarySearchRecursive(arr, num, pivot + 1, arr.length - 1);
    }

    return binarySearchRecursive(arr, num, 0, pivot);

}

console.log(binarySearchIterative([1,2,3,4,7,12],7));
console.log(binarySearchIterative([1,2,3,4,7,12],1));
console.log(binarySearchIterative([1,2,3,4,7,12],2));
console.log(binarySearchIterative([1,2,3,4,7,12],12));
console.log(binarySearchIterative([1,2,3,4,7,12],5));
console.log('------------------------------------\n');

console.log(binarySearchRecursive([1,2,3,4,7,12],7,0,5));
console.log(binarySearchRecursive([1,2,3,4,7,12],1,0,5));
console.log(binarySearchRecursive([1,2,3,4,7,12],2,0,5));
console.log(binarySearchRecursive([1,2,3,4,7,12],12,0,5));
console.log(binarySearchRecursive([1,2,3,4,7,12],5,0,5));
console.log('------------------------------------\n');

console.log(shiftedArraySearch([9, 12, 17, -2, -1, 1, 2, 4, 5, 6, 7], 4));
console.log(shiftedArraySearch([9, 12, 17, 2, 4, 5], 9))
console.log(shiftedArraySearch([1,2,3,4,7,12],3));