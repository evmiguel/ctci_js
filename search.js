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

console.log(binarySearchIterative([1,2,3,4,7,12],7));
console.log(binarySearchIterative([1,2,3,4,7,12],1));
console.log(binarySearchIterative([1,2,3,4,7,12],2));
console.log(binarySearchIterative([1,2,3,4,7,12],12));
console.log(binarySearchIterative([1,2,3,4,7,12],5));

console.log(binarySearchRecursive([1,2,3,4,7,12],7,0,5));
console.log(binarySearchRecursive([1,2,3,4,7,12],1,0,5));
console.log(binarySearchRecursive([1,2,3,4,7,12],2,0,5));
console.log(binarySearchRecursive([1,2,3,4,7,12],12,0,5));
console.log(binarySearchRecursive([1,2,3,4,7,12],5,0,5));