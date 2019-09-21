// let arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
//                 'm', 'a', 'k', 'e', 's', '  ',
//                 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ];

let arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
                'm', 'a', 'k', 'e', 's'];

function reverseWords(arr) {
  // reverse entire string first
  reverse(arr, 0, arr.length -1);
  
  let left = 0, right = 0;
  for (let i = 0; i< arr.length; i++) {
      if(arr[i] === ' ' || i === arr.length - 1) {
        if (i === arr.length - 1) {
            right = i;
        } else {
            right = i - 1;
        }
        reverse(arr, left, right);
        left = i + 1;
      }
  }
  
}

function reverse(arr, left, right) {
  while(left < right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
}

reverseWords(arr);
console.log(arr);
