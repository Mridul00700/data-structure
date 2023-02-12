"use strict";

// Collecting values from objects and sets -->>

// same function for comparing two arrays and returns true if they have same frequency of squared elements in the other one..

// Naive approach
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) return false;
    arr2.splice(index, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// better approach
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const obj1 = {};
  const obj2 = {};
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  console.log(obj1);
  console.log(obj2);

  for (let key in obj1) {
    if (!(key ** 2) in obj2) return false;
    if (obj1[key] !== obj2[key ** 2]) return false;
  }
  return true;
}

console.log(same1([1, 2, 3, 2], [9, 1, 4, 4]));

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const obj1 = {};
  for (let c of str1) obj1[c] = (obj1[c] || 0) + 1;
  for (let c of str2) {
    if (!obj1[c]) return false;
    obj1[c] = obj1[c] - 1;
  }
  return true;
}
console.log(validAnagram("rat", "atr"));

//SumZero - multiple pointer pattern

const array = [-5, -3, -2, 1, 3, 6];

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    }
    if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero(array));

// Unique Numbers -->

const countUnique = (arr) => {
  let count = arr.length === 0 ? 0 : 1;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      count++;
      i = j;
      j++;
    } else {
      j++;
    }
  }
  return count;
};
console.log(countUnique([]));

// Without using an extra variable.
function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      ++i;
      arr[i] = arr[j];
      ++j;
    } else {
      j++;
    }
  }
  return arr.length === 0 ? 0 : i + 1;
}

const countUniqueValueCheck = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      ++i;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(
  countUniqueValues([1, 1, 1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7])
);

// Max sum of n consecutive numbers -->

function maxSumSubArray(arr, n) {
  let max = 0;
  let sum = 0;
  let j = 0;
  let i = 0;
  while (j < arr.length) {
    if (j - i === n) {
      if (sum > max) max = sum;
      sum = 0;
      ++i;
      j = i;
    } else {
      sum += arr[j];
      j++;
    }
  }
  return max === 0 ? null : max;
}

console.log(maxSumSubArray([1, 2, 5, 2, 8, 1, 5], 4));

//  Alternate Less memory and more efficient technique

function maxSum(arr, n) {
  let max = 0;
  let sum = 0;
  if (arr.length < n) return null;
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  sum = max;
  for (let i = n; i < arr.length; i++) {
    sum = sum - arr[i - n] + arr[i];
    max = Math.max(sum, max);
  }
  return max;
}

console.log(maxSum([1, 2, 5, 2, 8, 1, 5], 4));

//Binary Search
const arr = [1, 2, 3, 4, 5, 6, 10, 15, 22, 24, 66, 73, 343, 346, 766];

const findPos = (arr, num) => {
  let min = 0;
  let max = arr.length;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] === num) {
      return middle;
    }
    if (arr[middle] > num) {
      max = middle - 1;
    }
    if (arr[middle] < num) {
      min = middle + 1;
    }
    console.log(middle);
  }
  console.log("not found!");
  return undefined;
};

console.log(findPos(arr, 66));

//  Frequency counter -->
function sameFrequency(a, b) {
  let lena = 0;
  let lenb = 0;
  let obj = {};
  while (a > 0) {
    let d = a % 10;
    obj[d] = (obj[d] || 0) + 1;
    a = Math.floor(a / 10);
    lena++;
  }
  console.log(obj);
  while (b > 0) {
    let d = b % 10;
    if (!(d in obj)) {
      return false;
    }
    if (obj[d] === 0) {
      return false;
    }
    obj[d] = obj[d] - 1;
    b = Math.floor(b / 10);
    lenb++;
  }
  return lena !== lenb ? false : true;
}

console.log(sameFrequency(31233344, 44333321));

function averagePair(arr, t) {
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let avg = 0;
  let j = arr.length - 1;
  while (i < j) {
    avg = (arr[i] + arr[j]) / 2;
    if (avg === t) return true;
    if (avg < t) i++;
    else j--;
  }
  return false;
}

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
    if (i === str1.length) return true;
  }
  return false;
}

function maxSubarraySum(arr, n) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  let max = 0;
  if (arr.length < n) return null;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  max = sum;
  for (let i = n; i < arr.length; i++) {
    sum += arr[i] - arr[i - n];
    max = Math.max(max, sum);
  }
  return max;
}

function minSubArrayLen(arr, n) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let min = Infinity;
  while (i < arr.length) {
    if (sum < n && j < arr.length) {
      sum += arr[j];
      j++;
    } else if (sum >= n) {
      min = Math.min(min, j - i);
      sum -= arr[i];
      i++;
    } else {
      break;
    }
  }
  return min === Infinity ? 0 : min;
}

function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  let objChar = {};
  let char;
  let longest = 0;
  let start = 0; // tracks the starting position of the current substring. Resets when we encouter duplicate character
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (objChar[char]) {
      start = Math.max(start, objChar[char]); // resetting start to beginning of new substring or doing nothing as the character is out of the scope of current calculation.
    }
    longest = Math.max(longest, i - start + 1); // calculating max by subtrating starting position of current substring with current position to give length of substring.
    objChar[char] = i + 1; //storing position of the character encountered / updating the position in case of duplicate.
  }
  return longest;
}
console.log(findLongestSubstring("thecatinthehat"));

function power(a, b) {
  if (b == 0) return 1;
  if (b == 1) return a;
  return a * power(a, b - 1);
}

let a = 0;
let b = 1;
let c = 0;

function fib(n) {
  if (n === 0) return c;
  a = b;
  b = c;
  c = a + b;
  return fib(n - 1);
}
console.log(fib(10));
console.log(c);

// Proper without variables
function fib1(n) {
  if (n <= 2) return 1;
  return fib1(n - 1) + fib1(n - 2);
}

console.log(fib1(4));

function reverse(str) {
  if (str.length === 0) return "";
  return str[str.length - 1].concat(reverse(str.slice(0, -1)));
}

let str1 = "";
let length = 0;
function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  length = Math.max(str.length, length);
  if (str.length === 0) {
    return;
  }
  str1 += str[str.length - 1];
  isPalindrome(str.slice(0, -1));
  console.log(str1, str);
  if (str1 !== str && str.length === length) return false;
  if (str1 === str) return true;
}

console.log(isPalindrome("tacocat"));

// Pure recursion -->
function isPalindrome(str) {
  if (str.length <= 1) return true;
  let first = str[0];
  let last = str[str.length - 1];
  if (first === last) {
    let str1 = str.substring(1, str.length - 1);
    return isPalindrome(str1);
  } else {
    return false;
  }
}

// Search Algorithms

//Linear Search

function linerSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
}

// Binary Search

function binarySearch(arr, val) {
  let l = 0;
  let r = arr.length - 1;
  let m = 0;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    console.log(l, r, m);
    if (arr[m] < val) {
      console.log("bigger");
      l = m + 1;
    } else if (arr[m] > val) {
      console.log("smaller");
      r = m - 1;
    } else {
      return m;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 2));

// Linear search for substring in a string

function search(str, sub) {
  let n = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === sub[0]) {
      n++;
      for (let j = 1; j < sub.length; j++) {
        if (str[i + j] !== sub[j]) {
          n--;
          break;
        }
      }
    }
  }
  return n;
}

console.log(search("wowomgzomg", "omg"));

//Sorting -

// Swapping

let aa = [1, 2, 3, 4];
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}
console.log(swap(aa, 1, 2));

// Bubble Sort

function bubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      // console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // console.log(arr);
}

// bubbleSort([7,3,2,6,1,7,199,346,112,55,67,885,22,35,67,32])
bubbleSort([
  1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 11, 12, 13, 15, 16, 16, 17, 18, 20, 19,
]);

// Bubble Sort for almost sorted array.
console.log("Almost Sorted");

function bubbleSortAlmostSorted(arr) {
  let flag = 0;
  for (let i = 1; i < arr.length; i++) {
    flag = 0;
    for (let j = 0; j < arr.length - i; j++) {
      // console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j + 1]) {
        flag = 1;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (flag === 0) {
      break;
    }
  }
  // console.log(arr);
}

bubbleSortAlmostSorted([
  1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 11, 12, 13, 15, 16, 16, 17, 18, 20, 19,
]);

// Selection Sort

function selectionSort(arr) {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    // console.log(arr);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
//   console.log(arr);
}

selectionSort([7, 3, 2, 6, 1, 7, 199, 346, 112, 55, 67, 885, 22, 35, 67, 32]);

//Insertion Sort

function insertionSort(arr) {
    // let lastPlace = 0;
    let countOfLoops = 0;
  for (let i = 1; i < arr.length; i++) {
    // console.log(arr)
    for (let j = i; j > 0; j--) {
        countOfLoops++;
        if(arr[j-1] > arr[j]){
            [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            // lastPlace = j;
        }
    } }
//   console.log("Sorted!" ,  arr, "Inside Loops -", countOfLoops)
}

function insertionSortEfficient(arr) {
    let countOfLoops = 0;
  for (let i = 1; i < arr.length; i++) {
    // console.log(arr)
    for (let j = i; j > 0; j--) {
        countOfLoops++;
        if(arr[j-1] > arr[j]){
            [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
        }else {
            break;
        }
    }   }
//    console.log("Sorted!", arr, "Inside Loops -", countOfLoops);
}

insertionSort([7, 3, 2, 6, 1, 7, 199, 346, 112, 55, 67, 885, 22, 35, 67, 32]);
insertionSortEfficient([7, 3, 2, 6, 1, 7, 199, 346, 112, 55, 67, 885, 22, 35, 67, 32]);


/* 
Bubble : Sort where the swaps are done everytime with adjacent element and highest value is bubbled to the last place after every loop. (Backended).

Selection : Sort where the swaps are done only at the last with min value stored and moved to the begining of the loop (i.e -> first place) hence min value is selected and put
at the first place of loops. (FrontEnded).

Insertion: Sort where the swaps are done in an small sample space which is in front of the index of the loop we are going through. Hence we create sorted array as we go through
and and put that number which is the index where it belongs on the sorted array by doing swaps and breaking if the number is smaller than the index, as the index is at the right place
because we are dealing with sorted array. 
*/


// Merge Sort 
//Merge and split and do the sort
//Merging two sorted array 
function mergeSorted (arr, arr1) {
    let sarr = [];
    let i=0;
    let j=0;
    // let len = arr.length > arr1.length ? arr1.length : arr.length
    for(; i< arr.length && j < arr1.length;){
        // console.log(i,j)
        if(arr[i]> arr1[j]){
            sarr.push(arr1[j])
            j++;
        }else{
            sarr.push(arr[i])
            i++
        }
    }
    // for(j=i; j< (len === arr1.length ? arr.length : arr1.length); j++ ){
    //     sarr.push((len === arr1.length ? arr[j] : arr1[j]))
    // }
    // for(let k = (i==arr.length? j : i); k < (i==arr.length? arr1.length : arr.length); k++){
    //     sarr.push(i==arr.length? arr1[k] : arr[k])
    // }

    // Or do this if this seems complex dynamic values :-

    for(let k =i; k< arr.length; k++){
        sarr.push(arr[k])
    }
    for(let k=j; k< arr1.length; k++){
        sarr.push(arr1[k])
    }

    return sarr;
}

// console.log(mergeSorted([1,2,5,7,89,99,100],[6,8,77,93,95,97,101,104,107,156]));

//  Merge Sort Algo Enjoying!!! 

function mergeSort (arr){
    // let length = arr.length;

    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2);
    return mergeSorted(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length)));

    // let mid = arr.length;
    // while(mid > 0){
    //     mid = Math.floor(mid/2);
    //     mergeSorted(arr.slice(0, mid), arr.slice(mid, arr))
    // }
}

console.log(mergeSort([7, 3, 2, 6, 1, 7, 199, 346, 112, 55, 67, 33, 885, 22, 35, 67, 32]));


//Quick Sort 

//Pivot helper

function pivotHelper(arr, start=0, end) {
  end = end ? end : arr.length-1;
  
  let pivot = arr[start];
  let pivotIndex = start;
  for(let i = start+1; i<= end; i++){
    if(pivot > arr[i]){
      pivotIndex++;
      [arr[pivotIndex], arr[i]]= [arr[i], arr[pivotIndex]]
      
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]
  return pivotIndex;
}
let ar = [16,8,2,1,5,7,6,3,9,10,14,17,19,23,4]
// console.log(pivotHelper(ar));
// console.log(ar)

function quickSort (arr, left =0, right = arr.length-1) {

  let index = pivotHelper(arr, left, right);

    if(left >= right ){
      return arr
    }
    quickSort(arr, left, index-1);
    quickSort(arr, index+1, right);

}
quickSort(ar)
console.log(ar, "Sorted");


// Radix Sort 
// Special Sorting algo

function getNumAtIndex (num, pos ) {
 
  // console.log(num, pos, Math.floor(num / (Math.pow(10, pos))))
  return (Math.floor(num / Math.pow(10, pos))) % (10)
} 

// console.log("get number at index 3",getNumAtIndex(15762467,7));

const digitCount = (num) => {
  // console.log(num)
  let c =0;
  while(num >0){
    c++;
    num = Math.floor(num /10); 
  }
  return c

}

// console.log(digitCount(1412141))

const largestDigitCount = (arr) => {
  let max =0;
  let temp =0;
for(let i=0; i< arr.length; i++){
  temp = digitCount(arr[i])
  if(max < temp)
  {
    max = temp
  }
}
return max;
}

// console.log(largestDigitCount([12312,12,3,424,4212,1412412,12123,1212,414]))

function radixSort (arr) {

  let loop = largestDigitCount(arr);
  // console.log(loop)
  for(let i=0; i< loop; i++){
    let ar = Array.from({length: 10}, ()=> []);
    for(let j=0; j< arr.length; j++){
      // num = getNumAtIndex(arr[j], i);
      // obj[num].push(arr[j]);
      ar[getNumAtIndex(arr[j], i)].push(arr[j])
      // if(ar[num]){  
      //   console.log("exist",ar[num])
      // ar[num] =  [...ar[num], arr[j]]
      // }
      // else {
      //   console.log("non exist",ar[num])
      //   ar[num] = [arr[j]];
      // }
      // for(let l=0; l<10; l++){
      //   arr[l]
      // }
    }
    arr= [].concat(...ar);
    // console.log("m arr", ar)
    // arr = ar.flat();
    //   // arr = [...ar[0],...ar[1],...ar[2],...ar[3],...ar[4],...ar[5],...ar[6],...ar[7],...ar[8],...ar[9]]; 
    //   // console.log("arr", arr) 
    //   console.log("finish", arr)
  }
  return arr
}
let checkArray = [16,8,2,1,5,7,6,3,9,10,14,17,19,23,4,3434,535,23,66,666,343,2323]
console.log(radixSort(checkArray));

// Detour to OOPs 


// class Car {
//   constructor(make, model, color, size){
//       this.type = 'car';
//       this.make = make;
//       this.model = model;
//       this.color = color;
//       this.size = size;
      
//   }
//   getSize = () => {
//        return `The size of the ${this.model} model ${this.type} is ${this.size}`
//    }    
//   getModel = ()=> {
//       return `The model is ${this.model}`;
//   }
  
//   getColor = () => {
//       return `The color of the ${this.type} is ${this.color}`
//   }
// }

// class Bus {
//    constructor(make, model, color,size ){
//        this.make = make;
//        this.color = color;
//        this.model = model;
//        this.size = size;
//        this.type = 'bus';
//    }
//    getSize = () => {
//        return `The size of the ${this.model} model ${this.type} is ${this.size}`
//    }     
//    getColor = () => {
//       return `The color of the ${this.type} is ${this.color}`
//   }
// }

// const newCar1 = new Car('1981', 'sedan', 'blue', 'long')
// const newCar2 = new Car('1999', 'compact', 'black', 'small')
// const newBus1 = new Bus('1967', 'load', 'orange', 'big')
// const newBus2 = new Bus('2001', 'pulling', 'red', 'medium')



// console.log(newCar1.getSize());
// console.log(newCar1.getColor());
// console.log(newCar2.getSize());
// console.log(newCar2.getColor());
// console.log(newBus1.getSize());
// console.log(newBus1.getColor());
// console.log(newBus2.getSize());
// console.log(newBus2.getColor());


//Using Inheritance

// class Automobile {
//   constructor(make, model, color, size,power){
//       this.make = make;
//       this.model = model;
//       this.color = color;
//       this.size = size;
//       this.power = power;
//   }
//    getPower = () => `The power of the ${this.type} of type ${this.model} is ${this.power}`
   
//        getSize = () => {
//        return `The size of the ${this.model} model ${this.type} is ${this.size}`
//    }    
//   getModel = ()=> {
//       return `The model is ${this.model}`;
//   }
  
//   getColor = () => {
//       return `The color of the ${this.type} is ${this.color}`
//   }
// }


// class Car extends Automobile {
//   constructor(make, model, color, size, power){
//       super(make, model, color, size, power)
//       this.type = 'car';
      
//   }
// }

// class Bus extends Automobile {
//    constructor(make, model, color,size, power){
//        super(make, model, color, size, power)
//        this.type = 'bus';
//    }
// }

// const newCar1 = new Car('1981', 'sedan', 'blue', 'long', 1000)
// const newCar2 = new Car('1999', 'compact', 'black', 'small', 600)
// const newBus1 = new Bus('1967', 'load', 'orange', 'big', 2000)
// const newBus2 = new Bus('2001', 'pulling', 'red', 'medium',1500)





// console.log(newCar1.getSize());
// console.log(newCar1.getColor());
// console.log(newCar1.getPower());
// console.log(newCar2.getSize());
// console.log(newCar2.getColor());
// console.log(newCar2.getPower());

// console.log(newBus1.getSize());
// console.log(newBus1.getColor());
// console.log(newBus1.getPower());
// console.log(newBus2.getSize());
// console.log(newBus2.getColor());
// console.log(newBus2.getPower());



//Linked List 
// DS with head tail and length property
// Consists of nodes, each node contains data and pointer to next node or null 


class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

const first = new Node("abc");

first.next = new Node("def");

console.log(first)