// This is the solution from CTCI, but it is buggy in JS
function mergesort(arr) {
    let helper = [];
    function mergesortUtil(arr, helper, low, high) {
        if(low < high) {
            const mid = Math.floor((low+high)/2);
            mergesortUtil(arr, helper, low, mid);
            mergesortUtil(arr, helper, mid+1, high);
            merge(arr, helper, mid, low, high);
        }
    }

    function merge(arr, helper, mid, low, high) {
        for(let i = low; i <= high; i++) {
            helper[i] = arr[i];
        }

        let helperLeft = low;
        let helperRight = mid+1;
        let curr = low;

        while(helperLeft <= low && helperRight <= high) {
            if (helper[helperLeft] <= helper[helperRight]) {
                arr[curr] = helper[helperLeft];
                helperLeft++
            } else {
                arr[curr] = helper[helperRight];
                helperRight++
            }
            curr++;
        }

        let remaining = mid - helperLeft;
        for (let i = 0; i<=remaining; i++) {
            arr[curr + i] = helper[helperLeft+i];
        }

    }

    mergesortUtil(arr, helper, 0, arr.length - 1);
    return arr;
}

function mergesortJS(arr) {
    if(arr.length === 1) {
        return arr;
    }

    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    return merge(mergesortJS(left), mergesortJS(right));
}



console.log(mergesort([3, 2, 7, 1, 12, 4]));
console.log(mergesortJS([3, 2, 7, 1, 12, 4, 7, 3 ,2]));

