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


// class Node {
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }

// const first = new Node("abc");

// first.next = new Node("def");
// first.next.next = new Node("ghi");
// console.log(first);

// class SinglyLinkedList {
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push (val) {
//     if(!this.head){
//     this.head = new Node(val);
//     this.tail = this.head;
//     }else {
//       this.tail.next = new Node(val);
//       this.tail = this.tail.next;
//     }
//     this.length +=1;
//     return this
//   }

//   //pop is done from the last.
//   pop () {
//     if(!this.head){
//       return undefined
//     }
//     let prevNode= this.head;
//     let nextNode = this.head;
//    while(nextNode.next){
//     prevNode = nextNode;
//     nextNode = nextNode.next;
//     } 
//     prevNode.next =null;
//     this.tail = prevNode;
//     this.length -=1;
//     if(this.length === 0){
//       this.head = null;
//       this.tail = null;
//     }
//     return nextNode;
//    }

//    shift() {
//     if(!this.head){
//       return undefined
//     }
//     let remove = this.head;
//     this.head = this.head.next;
//     this.length -= 1;
//     if(this.length === 0){
//       this.tail = null;
//     }
//     return remove; 
//    }

//    unShift (node) {
//     if(!this.head){
//       this.head = node;
//       this.tail = node;
//     }
//     else {
//     node.next = this.head;
//     this.head = node;
//     }
//     this.length +=1;
//     return this
//   }

//   get (index) {
//     if(index < 0 || index >=  this.length){
//       return null;
//     }
//     if(!this.head){
//       return null;
//     }
//     let count = 0;
//     let node = this.head;
//     while(count < index){
//       node = node.next;
//       count++;
//     }
//     return node;
//   }

//   set(index, value) {
//     let node = this.get(index);
//     if(!node){
//       return false
//     }
//     node.val = value;
//     return true;
//   }

//   insert(index, value) {
//     const newNode = new Node(value);
//     if(index ===0){
//       return this.unShift(newNode);
//     }
//     let prevNode = this.get(index-1);
//     if(!prevNode){
//       return false;
//     }
//     // or you this.push 
//     newNode.next = prevNode.next;
//     prevNode.next= newNode;
//     if(prevNode === this.tail){
//       this.tail = newNode
//     }
//     this.length +=1;
//     return this;
//   }

//   remove(index){
//     if(index ===0 ){
//       this.shift()
//     }
//     if(index >= this.length || index < 0){
//       return false;
//     }
//     if(index === (this.length -1)){
//       this.pop()
//     }
//     let prevNode = this.get(index-1);
//     let currNode = prevNode.next;
//     prevNode.next = currNode.next;
//     this.length -= 1;
//     return currNode;
//   }

//   reverse() {

// // 5  =>  10  =>   15 => 20
// //  null <= 5   <=  10  <=  15  20 
//     this.tail = this.head; 

//     let nextNode = this.head; 
  
//     let currentNode = null;
//     // currentNode.next=null;
//     while(nextNode){
//       let next = nextNode.next; 
//       nextNode.next = currentNode; 
//       currentNode = nextNode;  
//       nextNode = next; 
//     }
//     this.head = currentNode;
//     return this;
//   }

//   print() {
//     let arr = [];
//     let curr = this.head;
//     while(curr){
//       arr.push(curr.val);
//       curr = curr.next;
//     }
//     return arr
//   }
// }


// const list = new SinglyLinkedList();

// console.log(list.push("Check this out!"));
// console.log(list.push("second element!"));
// console.log(list.push("third element!"));
// console.log(list.push("fourth element!"));
// // console.log(list.pop());
// // console.log(list.pop());
// // console.log(list.pop());
// // console.log(list.pop());
// // console.log(list.shift());
// // console.log(list.unShift(new Node("ZERO!")));
// // console.log(list.get(2));
// // console.log(list.set(7, "changed value"));
// // console.log(list.insert(-2, "Inserted value value"));
// // console.log(list.remove(3));
// // console.log("Before Reverse", list.print());
// // console.log(list.reverse());
// // console.log("After Reverse", list.print());




// Doubly Linked List (DLL)

// class Node {
//   constructor(val){
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoubleLinkedList {
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     let newNode = new Node(val);
//     if(this.length ===0) {
//       this.head = newNode;
//       this.tail = newNode;
//     }else{
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length +=1;
//     return this;
//   }

//   pop(){
//     if(!this.head){
//       return undefined;
//     }
//     let remove = this.tail;
//     if(this.length === 1){
//       this.head = null;
//       this.tail = null;
//     }
//     else{
//     this.tail = this.tail.prev;  // this.tail.prev = remove.prev
//     this.tail.next = null;
//     }
//     remove.prev = null;
//     this.length -= 1;

//     return remove;
//   }

//   shift(){
//     if(!this.head){
//       return undefined;
//     }
//     let remove = this.head;
//     if(this.length ===1){
//       this.head = null;
//       this.tail = null;
//     }else {
//       this.head = remove.next;
//       this.head.prev = null;
//       // remove.next.prev = this.head;
//       remove.next = null;
//     }
//     // remove.prev = null;
//     this.length -= 1;
//     return remove
//   }

//   unshift(val){
//     let newNode = new Node(val);
//     if(!this.head){
//       this.head = newNode;
//       this.tail = newNode;
//     }else{
//       this.head.prev = newNode;
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length +=1;
//     return this;
//   }

//   get(index){
//      if(index <0 || index >=this.length){
//       return undefined;
//      }
//      let res;
//      let counter;
//      if(index < (this.length - index -1)){
//       counter =0;
//       res=this.head;
//       while(counter !== index){
//         res = res.next;
//         counter +=1;
//       }
//      }else {
//       counter = this.length-1;
//       res = this.tail;
//       while(counter !== index){
//         res = res.prev;
//         counter -=1;
//       }
//      }
//      return res;
//   }

//   set(index, val){
//     let updateNode = this.get(index);
//     if(updateNode)
//     updateNode.val = val;
//     else return false;
//     return true;
//   }

//   insert(index, val) {
//     if(index <0 || index > this.length){
//       return false;
//     }
//     if(index ===0){
//       this.unshift(val);
//     }else if(index === this.length){
//       this.push(val)
//     }else {
//     let newNode = new Node(val);
//     let shiftNode = this.get(index);
//     newNode.next=shiftNode;
//     newNode.prev=shiftNode.prev;
//     shiftNode.prev.next= newNode;
//     shiftNode.prev = newNode;
//     this.length +=1;
//     }
//        return true;
//   }

//   remove(index){
//     if(index <0 || index >= this.length){
//       return false;
//     }
//     let removeNode;
//     if(index === 0){
//       removeNode =  this.shift();
//     }else if(index === this.length-1){
//       removeNode = this.pop();
//     }else {
//       removeNode = this.get(index);
//       removeNode.prev.next = removeNode.next;
//       removeNode.next.prev = removeNode.prev;
//       removeNode.next=null;
//       removeNode.prev=null;
//       this.length -=1;
//     }
//     return removeNode;
//   }
// }

// const DList = new DoubleLinkedList();

// console.log(DList.push("1st value"))
// console.log(DList.push("2nd value"))
// console.log(DList.push("3rd value")) 
// console.log(DList.push("4th value"))
// console.log(DList.push("5th value"))
// console.log(DList.pop())
// console.log(DList.shift());
// console.log(DList.unshift("Here is unshift!"));
// console.log(DList.get(4));
// console.log(DList.set(2, "setting 3 to third"));
// console.log(DList.insert(1, "inserted val"));
// console.log(DList.remove(5));



//Stack Implementation using singly linked list

// class Node {
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(){
//     this.size = 0;
//     this.first = null;
//     this.last = null;
//   }

  ////We can't do this for stack as this is not constant time 

  // push(val){

  //   const newNode = new Node(val);

  //   if(!this.first){
  //     this.first = newNode;
  //     this.last = newNode;
  //   }else {
  //     this.last.next = newNode;
  //     this.last = newNode;
  //   }
  //   this.size +=1;
  //   return this;
  // }

  // pop(){
  //   if(!this.first){
  //     return undefined;
  //   }
  //   let remove = this.first;
  //   if(this.size ===1){ 
  //     this.first = null;
  //     this.last = null;
  //   }else{
  //     let prev = this.first
  //     while(remove.next){
  //       prev=remove;
  //       remove = remove.next;
  //     }
  //     prev.next = null;
  //     this.last = prev;
  //   }
  //   this.size -=1;
  //   return remove;
  // }

  //To implement constant time we can do the push and pop from front instead from back.

//   push(val){

//     //Constant time
//     const newNode = new Node(val);
//     if(!this.first){
//       this.first = newNode;
//       this.last = newNode;
//     }else {
//       let prevFirst = this.first;
//       this.first = newNode;
//       this.first.next=prevFirst;
//     }
//     this.size +=1;
//     return this.size;
//   }

//   pop(){

//     //Constant time
//     if(!this.first){
//       return null
//     }
//     let removedNode = this.first;
//     if(this.size ===1){
//       this.first = null;
//       this.last = null;
//     }else {
//       this.first = removedNode.next;
//     }
//     removedNode.next=null;
//     this.size -=1;
//     return removedNode.val;
//   }


// }


// const Stack1 = new Stack();
// console.log(Stack1.push("1st"))
// console.log(Stack1.push("2st"))
// console.log(Stack1.push("3st"))
// console.log(Stack1.push("4st"))

// console.log(Stack1.pop());



//Start of Queue

// FIFO 

// Array -> push + shift   || unshift + pop   its takes O(n) time


//Hence using linked list for O(C) constant time

//We will use push and shift to get this done!

// class Node {
//   constructor(val){
//     this.val = val;
//     this.next= null;
//   }
// }

// class Queue {
//   constructor(){
//     this.first=null;
//     this.last=null;
//     this.size = 0;
//   }

//   enqueue(val){
//     const newNode = new Node(val);
//     if(!this.first){
//       this.first = newNode;
//       this.last = newNode;
//     }else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }

//     this.size +=1;
//     return this.size;
//   }

//   dequeue(){
//     let removedNode;
//     if(!this.first){
//       return null;
//     }
//     removedNode = this.first;
//     if(this.size ===1){
//       this.first = null;
//       this.last =null;
//     } else {
//       this.first = removedNode.next;
//       removedNode.next=null;
//     }
//     this.size -=1;
//     return removedNode.val;
//   }
// }

// const queue = new Queue();

// console.log(queue.push("1"))
// console.log(queue.push("2"))
// console.log(queue.push("3"))
// console.log(queue.push("4"))
// console.log(queue.push("5"))
// console.log(queue.pop())




//Tree


//HTML DOM
//N/W Routing
//Abstract Syntax tree
//Artificial Intelligence
//Folders in OS
//Computer in file system

//Binary Tree
//Can have max 2 nodes 

//Binary search tree
//Sorted in a particular way
//Every node on the left is smaller than the parent and on right node is greater than the parent.


// class Node {
//   constructor(val){
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor(){
//     this.root = null;
//   }

//   insert(val){
//     let newNode = new Node(val);
//     if(!this.root){
//       this.root = newNode; 
//       return this;
//     } 
//     let curr = this.root;
//     while(true){
//       if(newNode.val === curr.val){
//         return undefined;
//       }
//       if(newNode.val < curr.val){
//         if(!curr.left){
//           curr.left = newNode;
//           return this
//         }
//         curr = curr.left;
//       }else {
//         if(!curr.right){
//           curr.right = newNode;
//           return this;
//         }
//         curr = curr.right;
//       }
//     }
//   }

//   find(val){
//     if(!this.root){
//       return false
//     }
//     let curr = this.root;
//     while(true){
//       if(curr.val === val){
//         return true
//       }
//       if(val < curr.val){
//         if(!curr.left){
//           return false;
//         }
//         curr = curr.left;
//       }else{
//       if(!curr.right){
//         return false;
//       }
//       curr = curr.right
//     }
//     }
//   }

//   find2(val){
//     if(this.root === null) return false;
//     let curr = this.root;
//     let found = false;
//     while(curr && !found){
//       if(val < curr.val){
//         curr = curr.left;
//       }else if(val > curr.val){
//         curr = curr.right;
//       }else {
//         found = true;
//       }
//     }
//     if(!curr){
//       return false
//     }
//     return curr;
//   }
// }


// let tree = new BST();

// tree.insert(10)
// tree.insert(13)
// tree.insert(5)
// tree.insert(7)
// tree.insert(2)
// tree.insert(16)
// tree.insert(11)
// console.log(tree.find(5));




//Tree traversal

//Depth First (down) and Breadth First Search (lvl search, across)


//Depth First - in-order, pre-order and post-order


// Breadth First Search

// class Node {
//   constructor(val){
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor(){
//     this.root = null;
//   }

//   insert(val){
//     let newNode = new Node(val);
//     if(!this.root){
//       this.root = newNode; 
//       return this;
//     } 
//     let curr = this.root;
//     while(true){
//       if(newNode.val === curr.val){
//         return undefined;
//       }
//       if(newNode.val < curr.val){
//         if(!curr.left){
//           curr.left = newNode;
//           return this
//         }
//         curr = curr.left;
//       }else {
//         if(!curr.right){
//           curr.right = newNode;
//           return this;
//         }
//         curr = curr.right;
//       }
//     }
//   }

//   find(val){
//     if(!this.root){
//       return false
//     }
//     let curr = this.root;
//     while(true){
//       if(curr.val === val){
//         return true
//       }
//       if(val < curr.val){
//         if(!curr.left){
//           return false;
//         }
//         curr = curr.left;
//       }else{
//       if(!curr.right){
//         return false;
//       }
//       curr = curr.right
//     }
//     }
//   }

//   BFS(){
//     let data = [];
//     let queue = [];   // Queue FIFO so use push and shift 
//     let node = this.root;
//     queue.push(this.root);
//     while(queue.length!==0){
//       node = queue.shift();
//       if(node.left){
//         queue.push(node.left);
//       }
//       if(node.right){
//         queue.push(node.right);
//       }
//       data.push(node.val);
//     }
//     return data;
//   }

//   DFSPreOrder() {
//     let result = [];
//     let current = this.root;

//     function helper(node){
//       result.push(node.val);
//       if(node.left){
//         helper(node.left)
//       }
//       if(node.right){
//         helper(node.right)
//       }
//     }
//     helper(current);
//     return result;
//   }

//   DFSPostOrder() {
//     let result = [];
//     let current = this.root;

//     function helper(node){
      
//       if(node.left){
//         helper(node.left)
//       }
//       if(node.right){
//         helper(node.right)
//       }
//       result.push(node.val);
//     }
//     helper(current);
//     return result;
//   }

//   DFSInOrder() {
//     let result = [];
//     let current = this.root;

//     function helper(node){
      
//       if(node.left){
//         helper(node.left)
//       }
//       result.push(node.val);
//       if(node.right){
//         helper(node.right)
//       }
//     }
//     helper(current);
//     return result;
//   }

// }

// let tree = new BST();
// tree.insert(10)
// tree.insert(13)
// tree.insert(5)
// tree.insert(7)
// tree.insert(2)
// tree.insert(16)
// tree.insert(11)

// console.log(tree.BFS());
// console.log(tree.DFSPreOrder());
// console.log(tree.DFSPostOrder());
// console.log(tree.DFSInOrder());

//Depth First 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Binary Heap 

//Max Binary heap - parent is always greater than children
//Min Binary heap - Parent is always smaller than children

//Used as a priority queue // Also graph traversal

//Children for storing is i+1 away from the parent = 2n+1 left and 2n+2 right

//Insertion and deletion

// Max binary heap
// class BinaryHeap {
//   constructor(){
//     this.values = [41,39,33,18,27,12]
//   }

//   bubleUp(index){
//     console.log("index", index);
//     if(index===0)
//     return
//     let parentIndex = Math.floor((index - 1) / 2); 
//     if(this.values[parentIndex] < this.values[index]){
//       [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
//     }
//     else {
//       return
//     }
//     this.bubleUp(parentIndex);
//   }

//   insert(val){
//     this.values.push(val);
//     this.bubleUp(this.values.length-1)
//     return this.values;
//   }

//   sinkDown(index) {
//     if(index>= this.values.length-1){
//       return
//     }
//     let leftChild = this.values[((2 * index) +1)]
//     let rightChild = this.values[((2 * index) +2)]
//     console.log(this.values[index], index)
//     if(this.values[index] > leftChild && this.values[index] > rightChild){
//       return
//     }
//     console.log("left",leftChild,"right",rightChild)
//     if(leftChild > rightChild || rightChild === undefined){  
//       console.log("left",leftChild, index)
//       if(!leftChild || leftChild < this.values[index]){
//         return
//       }
//       // [leftChild, this.values[index]] = [this.values[index], leftChild];
//       this.values[((2 * index) +1)] = this.values[index];
//       this.values[index] = leftChild;
//       index = ((2 * index) +1);
//     }else {
//       console.log("right",rightChild);
//       if(!rightChild || rightChild < this.values[index]){
//         return
//       }
//       // [rightChild, this.values[index]] = [this.values[index], rightChild];
//       this.values[((2 * index) +2)] = this.values[index]
//       this.values[index] = rightChild;
//       index = ((2 * index) +2);
//     }
//     this.sinkDown(index)
//   }

//   sinkDown2() {
//     let index = 0;
//     const length = this.values.length;
//     const element = this.values[0];
//     while(true){
//       let leftChildIndex = 2 * idx + 1;
//       let rightChildIndex = 2 * idx + 2;
//       let leftChild;
//       let rightChild;
//       let swap = null;

//       if(leftChildIndex < length){
//         leftChild = this.values[leftChildIndex]
//         if(leftChild> element){
//           swap = leftChildIndex;
//         }
//       }
//       if(rightChildIndex < length){
//         rightChild = this.values[rightChildIndex]
//         if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
//           swap = rightChildIndex;
//         }
//       }
//       if(swap === null) break;
//       this.values[index] = this.values[swap];
//       this.values[swap] = element;
//       index = swap;
//       element = this.values[swap];
//     }
//   }


//   extractMax(){
//     let last = this.values.pop();
//     if(this.values.length > 0){
//       this.values[0] =last
//     }
//     this.sinkDown2();
//     return this;
//   }



//   remove(){
//     let last = this.values.pop();
//     if(this.values.length > 0){
//       this.values[0] =last
//     }
//     this.sinkDown(0);
//     return this;
//   }

// }

// const BH = new BinaryHeap();
// // console.log(BH.insert(23));
// // console.log(BH.insert(5));
// // console.log(BH.insert(8));
// // console.log(BH.insert(444));
// // console.log(BH.insert(2333));
// // console.log(BH.insert(22));
// // console.log(BH.insert(23663));
// // console.log(BH.insert(2223));
// // console.log(BH.insert(123));
// console.log(BH.insert(55)); 
// // console.log(BH.insert(1)); 
// // console.log(BH.insert(1)); 
// // console.log(BH.insert(45)); 
// console.log(BH.remove());
// console.log(BH.remove());

// Priority Queue

// class MinPriorityQueue {
//   constructor(){
//     this.values = []
//   }

//   bubleUp(index){
//     // console.log("index", index);
//     if(index===0)
//     return
//     let parentIndex = Math.floor((index - 1) / 2); 
//     if(this.values[parentIndex].priority > this.values[index].priority){
//       // [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
//       let temp = this.values[parentIndex];
//       this.values[parentIndex] = this.values[index];
//       this.values[index] = temp;
//     }
//     else {
//       return
//     }
//     this.bubleUp(parentIndex);
//   }

//   enqueue(val, priority){
//     const newNode = new Node(val, priority);
//     this.values.push(newNode);
//     this.bubleUp(this.values.length-1)
//     return this.values;
//   }

//   sinkDown(index) {
//     if(index>= this.values.length-1){
//       return
//     }
//     let leftChild = this.values[((2 * index) +1)]
//     let rightChild = this.values[((2 * index) +2)]
//     // console.log(this.values[index], index)
//     if(this.values[index].priority < leftChild?.priority && this.values[index].priority < rightChild?.priority){
//       return
//     }
//     // console.log("left",leftChild,"right",rightChild)
//     if(leftChild?.priority < rightChild?.priority || rightChild === undefined){  
//       // console.log("left",leftChild, index)
//       if(!leftChild || leftChild?.priority > this.values[index].priority){
//         return
//       }
//       // [leftChild, this.values[index]] = [this.values[index], leftChild];
//       this.values[((2 * index) +1)] = this.values[index];
//       this.values[index] = leftChild;
//       index = ((2 * index) +1);
//     }else {
//       // console.log("right",rightChild);
//       if(!rightChild || rightChild?.priority > this.values[index]){
//         return
//       }
//       // [rightChild, this.values[index]] = [this.values[index], rightChild];
//       this.values[((2 * index) +2)] = this.values[index]
//       this.values[index] = rightChild;
//       index = ((2 * index) +2);
//     }
//     this.sinkDown(index)
//   }

//   sinkDown2() {
//     let index = 0;
//     const length = this.values.length;
//     const element = this.values[0];
//     while(true){
//       let leftChildIndex = 2 * index + 1;
//       let rightChildIndex = 2 * index + 2;
//       let leftChild;
//       let rightChild;
//       let swap = null;

//       if(leftChildIndex < length){
//         leftChild = this.values[leftChildIndex]
//         if(leftChild.priority < element.priority){
//           swap = leftChildIndex;
//         }
//       }
//       if(rightChildIndex < length){
//         rightChild = this.values[rightChildIndex]
//         if((swap === null && rightChild.priority < element) || (swap !== null && rightChild.priority < leftChild.priority)){
//           swap = rightChildIndex;
//         }
//       }
//       if(swap === null) break;
//       this.values[index] = this.values[swap];
//       this.values[swap] = element;
//       index = swap;
//       element = this.values[swap];
//     }
//   }


//   dequeue2(){
//     let first = this.values[0]
//     let last = this.values.pop();
//     if(this.values.length > 0){
//       this.values[0] =last
//     }
//     this.sinkDown2();
//     return first;
//   }
//   dequeue(){
//     let first = this.values[0]
//     let last = this.values.pop();
//     if(this.values.length > 0){
//       this.values[0] =last
//     }
//     this.sinkDown(0);
//     return first;
//   }
// }

// class Node {
//   constructor(val, priority){
//     this.val = val;
//     this.priority = priority;
//   }
// }

// const ER = new MinPriorityQueue();

// ER.enqueue("common cold", 5);
// ER.enqueue("gunshot", 1);
// ER.enqueue("fever", 4);
// ER.enqueue("broken arm", 2);
// ER.enqueue("foot issue", 3);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Hash Table

//Key value pair

//Array for storing data but instead of number as indecies we have keys that will be converted to number index by hash functions
//Hash functions takes input and return value fixed
//fast constant time  

// function hash(key, length){
//   let total =0;
//   for(let char of key){
//     let code = char.charCodeAt(0) -96;
//     total = (total + code) % length;
//   }
//   return total;
// }

// // For more uniformity and to avoid collisions use prime numbers

// function hashImproved(key, length = 13){
//   let total =0;
//   let prime = 31;
//   for(let i=0; i< Math.min(key.length, 100); i++){
//     let char = key[i];
//     let code = char.charCodeAt(0) -96;
//     total = (total * prime + code) % length;
//   }    
//   return total;
// }


// // Collision 
// //seperate chaining and probing 

// // Hash Table

// class HashTable {
//   constructor(size = 13){
//     this.keyMap = new Array(size);
//   }

//   _hash(key) {
//     let total = 0;
//     let prime = 31;
//     for(let i =0; i < Math.min(key.length, 100); i++){
//       let char = key[i];
//       total = ((total * prime + char.charCodeAt(0)) - 96) % this.keyMap.length;
//     }
//     return total;
//   }

//   set(key, value) {
//     let pos = this._hash(key);
//     // if(this.keyMap[pos] == undefined){
//     //   this.keyMap[pos].push([key, value]);
//     // }else {
//     //   this.keyMap[pos] = [[key, value]];
//     // }
//     if(!this.keyMap[pos]){
//       this.keyMap[pos] = [];
//     }
//     this.keyMap[pos].push([key, value])
//   }

//   get(key){
//     let pos = this._hash(key);

//     if(this.keyMap[pos]){

//       for(let i=0; i< this.keyMap[pos].length; i++){
//         if(key === this.keyMap[pos][i][0]){
//           return this.keyMap[pos][i][1]
//         }
//       }
//     }
//     return undefined;
//   }

//   values() {
//     let val = [];
//     for (let i =0; i< this.keyMap.length; i++){
//       if(this.keyMap[i]){
//         for(let j=0; j< this.keyMap[i].length; j++){
//           if(!val.includes(this.keyMap[i][j][1]))
//           val.push(this.keyMap[i][j][1]);
//         }
//       }
//     }
//     return val;
//   }

//   keys() {
//       let key = [];
//       for (let i =0; i< this.keyMap.length; i++){
//         if(this.keyMap[i]){
//           for(let j=0; j< this.keyMap[i].length; j++){
//             if(!key.includes(this.keyMap[i][j][0]))
//             key.push(this.keyMap[i][j][0]);
//           }
//         }
//       }
//       return key;
//   }

// }

// const HT = new HashTable();

// HT.set("green", "#gggg")
// HT.set("red", "#rrrr")
// HT.set("orange", "#ooo")
// HT.set("yellow", "#yyyy")
// HT.set("blue", "#bbbb")
// HT.set("purple", "#pppp")
// HT.set("dark", "#dddd")
// HT.set("black", "#dddd")
// HT.set("black", "#dddd")
// console.log(HT.values());
// console.log(HT.keys());


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Graphs

//Google Map... 
//represent social media.. 
//maybe social profile of anyone ... 
//Recomendation engine


// Tree has only one path from one node to another while graphs may have several
//Directed and Undirected graph
//Weighted and Unweighted graph

//Adjacency matrix 
//Adjacency list 


// class Graph {
//   constructor(){
//     this.adjacencyList = {}
//   }

//   addVertex(vertex) {
//     if(!this.adjacencyList[vertex])
//     this.adjacencyList[vertex] =  [];
//   } 

//   addEdge(vertex1, vertex2) {
//     this.adjacencyList[vertex1].push(vertex2);
//     this.adjacencyList[vertex2].push(vertex1);

//   }

//   removeEdge(v1, v2){
//     this.adjacencyList[v1] = this.adjacencyList[v1].filter(val => val !== v2)
//     this.adjacencyList[v2] = this.adjacencyList[v2].filter(val => val !== v1)
//   }

//   removeVertex(v) {
//     let len = this.adjacencyList[v].length
//     for(;this.adjacencyList[v].length >0;){
//       // console.log(v, this.adjacencyList[v][i],this.adjacencyList[v].length)
//       this.removeEdge(v, this.adjacencyList[v][0]);
//     }
//     delete this.adjacencyList[v]
//   } 

//   DFSRecursive(vertex){

//     let result = [];
//     let visited = {}

//     const DFS = (vertex) =>{
//       if(this.adjacencyList[vertex].length ===0){
//         return
//       }
//       result.push(vertex);  
//       visited[vertex] = true
//       console.log(visited, result);
//       for(let i=0 ; i<this.adjacencyList[vertex].length; i++){
//         if(!visited[this.adjacencyList[vertex][i]]){
//           DFS(this.adjacencyList[vertex][i]);
//         }
//       }
//     }

//     DFS(vertex);
//     return result;
//   }


//   DFSIterative(vertex){
//     const stack = [vertex];
//     const result = [];
//     const visited = {};
//     let currentVertex;
    
//     visited[vertex] = true;
//     while(stack.length){
//       currentVertex = stack.pop();
//       result.push(currentVertex);
      
//       this.adjacencyList[currentVertex].forEach(ele => {
//         if(!visited[ele]){
//           visited[ele] = true;
//           stack.push(ele);
//         }
//       });
//     }
//     return result
//   }

//   BFS(vertex){
//     const result = [];
//     const queue = [vertex];
//     const visited = {};
//     let currVertex;

//     visited[vertex] = true;
//     while(queue.length){
//       currVertex = queue.shift();
//       result.push(currVertex);
//       this.adjacencyList[currVertex].forEach(ele => {
//         if(!visited[ele]){
//         queue.push(ele);
//         visited[ele] = true;
//         }
//       });
//     }
//     return result;
//   }
// }


// let g = new Graph();

// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")
// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.addEdge("B", "D");
// g.addEdge("C", "E");
// g.addEdge("D", "E");
// g.addEdge("D", "F");
// g.addEdge("E", "F");
// g.removeEdge("mum", "hyd");
// g.removeVertex("hyd");
// del
// : 
// (2) ['lko', 'hyd']
// hyd
// : 
// (2) ['mum', 'del']
// lko
// : 
// (2) ['del', 'mum']
// mum
// : 
// (2) ['hyd', 'lko']
// console.log(g.DFSRecursive("A"));
// console.log(g.DFSIterative("A"));
// console.log(g.BFS("A"));


// add edge

//Depth first Graph
// do one branch first


//Dijkstra's Algo 

// Shortest path from point A to point B
// We need weighted graph

// class Node {
//   constructor(v, weight){
//     this.node = v;
//     this.weight = weight 
//   }
// }

// class WeightedGraph {
//   constructor(){
//     this.adjacencyList = {};
//   }

//   addVertex(vertex){
//     if(!this.adjacencyList[vertex]){
//       this.adjacencyList[vertex] = [];
//     }
//   }

//   addEdge(vertex1, vertex2, weight){
//     // this.adjacencyList[vertex1] = [...this.adjacencyList[vertex1] , new Node(vertex2, weight)];
//     // this.adjacencyList[vertex2] = [...this.adjacencyList[vertex2] , new Node(vertex1, weight)];
//     this.adjacencyList[vertex1].push({node: vertex2, weight})
//     this.adjacencyList[vertex2].push({node: vertex1, weight})
//   }

// }

// const wg = new WeightedGraph();

// wg.addVertex("A")
// wg.addVertex("B")
// wg.addVertex("C")
// wg.addVertex("D")
// wg.addVertex("E")
// wg.addVertex("F")
// wg.addEdge("A", "B", 10);
// wg.addEdge("A", "C", 20);
// wg.addEdge("B", "D", 30);
// wg.addEdge("C", "E", 45);
// wg.addEdge("D", "E",121);
// wg.addEdge("D", "F",11);
// wg.addEdge("E", "F", 1);

// class PriorityQueue {
//   constructor(){
//     this.values = []
//   }

//   enqueue(val, priority){
//     this.values.push({val, priority});
//     this.sort();
//   }

//   dequeue(){
//     const first = this.values.shift();
//     return first;
//   }

//   sort(){
//     this.values.sort((a, b) => a.priority - b.priority); 
//   }

// }

// let P = new PriorityQueue();

// class WeightedGraph {
//   constructor(){
//     this.adjacencyList = {};
//   }

//   addVertex(vertex){
//     if(!this.adjacencyList[vertex]){
//       this.adjacencyList[vertex] = [];
//     }
//   }

//   addEdge(vertex1, vertex2, weight){
//     // this.adjacencyList[vertex1] = [...this.adjacencyList[vertex1] , new Node(vertex2, weight)];
//     // this.adjacencyList[vertex2] = [...this.adjacencyList[vertex2] , new Node(vertex1, weight)];
//     this.adjacencyList[vertex1].push({node: vertex2, weight})
//     this.adjacencyList[vertex2].push({node: vertex1, weight})
//   }

//   DijkstraS(start, end) {
//     const nodes = new PriorityQueue();
//     const distances = {};
//     const previous = {};
//     let smallest;
//     let path =[];
//     for(let vertex in this.adjacencyList){
//       if(vertex ===start){
//         distances[vertex] = 0;
//         nodes.enqueue(vertex, 0)
//       }
//       else {
//         distances[vertex] = Infinity
//         nodes.enqueue(vertex, Infinity)
//       }
//       previous[vertex] = null;
//     }
//     // console.log(distances, this.adjacencyList, )
//     while(nodes.values.length){
//       smallest = nodes.dequeue().val;
//       if(smallest === end){
//         console.log(distances)
//         console.log(previous)

//         while(previous[smallest]){
//           path.push(smallest);
//           smallest = previous[smallest]
//         }
//         break;
//       }
//       for( let neighbour in this.adjacencyList[smallest]){
//         let nextNode = this.adjacencyList[smallest][neighbour];
//         let candidate = distances[smallest] + nextNode.weight
//         if(candidate < distances[nextNode.node]){
//           distances[nextNode.node] = candidate;
//           previous[nextNode.node] = smallest;
//           nodes.enqueue(nextNode.node, candidate);
//         }
//       }
//     }

//     return path.concat(smallest).reverse();

//   }

// }
// // function DijkstraS (start, end){
// //   P.enqueue(start)
// // }



// class PriorityQueue {
//   constructor(){
//     this.values = []
//   }

//   bubleUp(index){
//     // console.log("index", index);
//     if(index===0)
//     return
//     let parentIndex = Math.floor((index - 1) / 2); 
//     if(this.values[parentIndex].priority > this.values[index].priority){
//       // [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
//       let temp = this.values[parentIndex];
//       this.values[parentIndex] = this.values[index];
//       this.values[index] = temp;
//     }
//     else {
//       return
//     }
//     this.bubleUp(parentIndex);
//   }

//   enqueue(val, priority){
//     const newNode = new Node(val, priority);
//     this.values.push(newNode);
//     this.bubleUp(this.values.length-1)
//     return this.values;
//   }

//   sinkDown(index) {
//     if(index>= this.values.length-1){
//       return
//     }
//     let leftChild = this.values[((2 * index) +1)]
//     let rightChild = this.values[((2 * index) +2)]
//     // console.log(this.values[index], index)
//     if(this.values[index].priority < leftChild?.priority && this.values[index].priority < rightChild?.priority){
//       return
//     }
//     // console.log("left",leftChild,"right",rightChild)
//     if(leftChild?.priority < rightChild?.priority || rightChild === undefined){  
//       // console.log("left",leftChild, index)
//       if(!leftChild || leftChild?.priority > this.values[index].priority){
//         return
//       }
//       // [leftChild, this.values[index]] = [this.values[index], leftChild];
//       this.values[((2 * index) +1)] = this.values[index];
//       this.values[index] = leftChild;
//       index = ((2 * index) +1);
//     }else {
//       // console.log("right",rightChild);
//       if(!rightChild || rightChild?.priority > this.values[index]){
//         return
//       }
//       // [rightChild, this.values[index]] = [this.values[index], rightChild];
//       this.values[((2 * index) +2)] = this.values[index]
//       this.values[index] = rightChild;
//       index = ((2 * index) +2);
//     }
//     this.sinkDown(index)
//   }

//   sinkDown2() {
//     let index = 0;
//     const length = this.values.length;
//     const element = this.values[0];
//     while(true){
//       let leftChildIndex = 2 * index + 1;
//       let rightChildIndex = 2 * index + 2;
//       let leftChild;
//       let rightChild;
//       let swap = null;

//       if(leftChildIndex < length){
//         leftChild = this.values[leftChildIndex]
//         if(leftChild.priority < element.priority){
//           swap = leftChildIndex;
//         }
//       }
//       if(rightChildIndex < length){
//         rightChild = this.values[rightChildIndex]
//         if((swap === null && rightChild.priority < element) || (swap !== null && rightChild.priority < leftChild.priority)){
//           swap = rightChildIndex;
//         }
//       }
//       if(swap === null) break;
//       this.values[index] = this.values[swap];
//       this.values[swap] = element;
//       index = swap;
//       element = this.values[swap];
//     }
//   }


//   dequeue2(){
//     let first = this.values[0]
//     let last = this.values.pop();
//     if(this.values.length > 0){
//       this.values[0] =last
//     }
//     this.sinkDown2();
//     return first;
//   }
//   dequeue(){
//     let first = this.values[0]
//     let last = this.values.pop();
//     if(this.values.length > 0){
//       this.values[0] =last
//     }
//     this.sinkDown(0);
//     return first;
//   }
// }

// class Node {
//   constructor(val, priority){
//     this.val = val;
//     this.priority = priority;
//   }
// }

// const wg = new WeightedGraph();

// wg.addVertex("A")
// wg.addVertex("B")
// wg.addVertex("C")
// wg.addVertex("D")
// wg.addVertex("E")
// wg.addVertex("F")


// wg.addEdge("A", "B", 4);
// wg.addEdge("A", "C", 2);
// wg.addEdge("B", "E", 3);
// wg.addEdge("C", "D", 2);
// wg.addEdge("C", "F", 4);
// wg.addEdge("D", "E", 3);
// wg.addEdge("D", "F", 1);
// wg.addEdge("E", "F", 1);


// console.log(wg.DijkstraS("A", "E"));



//Dyanamic Programming 

// When to use
// Overlapping subproblems sub problems we have should be overalaping or repeating
// Optimal Substructure 


//Fibonacci series 

// function fib (n) {
//   console.log(n)
//   if(n <= 2){
//     return 1
//   }
//   return fib(n-1) + fib(n-2)
// }

// console.log(fib(6));

// function fibDynamic (n, memo=[]) {
//   if(memo[n] !== undefined){
//     return memo[n];
//   }
//   // console.log(n);
//   if(n<=2) return 1;

//   let res = fibDynamic(n-1, memo) + fibDynamic(n-2, memo);

//   memo[n] = res;
//   // console.log(memo)
//   return res;

// } 

// function fibDynamicSmall (n, memo=[undefined, 1, 1]) {
//   if(memo[n] !== undefined){
//     return memo[n];
//   }
//   let res = fibDynamicSmall(n-1, memo) + fibDynamicSmall(n-2, memo);

//   memo[n] = res;
//   return res;

// } 

// function functionTib ( n) {
//   if(n<=2)  return 1;
//   let fib = [0, 1, 1];
//   for(let i=3; i<= n; i++){
//     fib[i] = fib[i-1] + fib[i-2];
//   }
//   return fib[n];
// }

// function fibTabulation (n) {
//   let sum =0;
//   let a = 0;
//   let b = 1;
//   let c=0;
//   // console.log(sum);
//   while(c<n){
//     c++
//     a = b;
//     b=sum;
//     sum = a + b;
//     // console.log(sum);
//   }
//   return sum
// } 

// // console.log(fibDynamic(6));
// console.log(fibDynamicSmall(100));
// console.log(fibTabulation(100));
// console.log(functionTib(100));

// ////Patterns
// function developer (age, skill) {
//   this.age = age;
//   this.skill = skill;
// }

// function tester (age, skill) {
//   this.age= age;
//   this.skill = skill;
// }

// // console.log(new tester(25, 'selenium'));
// // console.log(new developer(25, 'react'));
// // console.log(new tester(27, 'java'));
// // console.log(new tester(29, 'javaScript'));

// // type 1 = developer;
// // type 2 = tester;
// function employeeFactory () {
//   this.create = (age, skill, type) => {
//      switch(type){
//     case 1:
//       return new developer(age, skill);
//     case 2: 
//       return new tester(age, skill);
//     default:
//       console.log("Invalid employee type")
//   }}
// }

// function show (){
//   console.log(this.skill, this.age);
// }

// const factory = new employeeFactory();

// const employee =[];
// employee.push(factory.create(23, 'react', 1));
// employee.push(factory.create(25, 'selenium', 2));
// employee.push(factory.create(28, 'JavaScript', 1));

// employee.forEach(emp => show.call(emp));



////////////// Design Patterns //////////////////

// S.O.L.I.D

// Single responsibility

// class Journal {
  
//   constructor(){
//     this.entries = {};
//   }
  
//   addEntry(text){
    
//     let c = ++Journal.count;
//     this.entries[c] = `${c} : ${text}`;
//     return c;
//   }
  
//   deleteEntry(index){
//     delete this.entries[index];
//   }
  
//   toString(){
//     return Object.values(this.entries).join("\n");
//   }
  
// }

// Journal.count = 0;

// const journal = new Journal();
// journal.addEntry("I did something!");
// journal.addEntry("I did another thing!");

// console.log(journal.toString());


// Open Close 

// const color = Object.freeze({
//   red: 'red',
//   blue: 'blue',
//   green: 'green'
// })

// const size = Object.freeze({
//   small: 'small',
//   medium: 'medium',
//   large: 'large'
// })


// class Product {
  
//    constructor(name,color, size, ) {
//      this.name = name;
//      this.color = color;
//      this.size = size;
//    }
// }

// class ProductFilter {
//   filterByColor(products, color){
//     return products.filter(p => p.color === color);
//   }
//   filterBySize(products, size){
//     return products.filter(p => p.size === size);
//   }
  
//   // Filter size and color
//   // state space explosion...
//   // 3 criteria = 7 methods
// }

// // specification

// class ColorSpecification {
  
//    constructor(color){
//      this.color = color;
//    }
  
//   isSatisfied(item){
//     return item.color === this.color;
//   }
  
// }
// class SizeSpecification {
  
//    constructor(size){
//      this.size = size;
//    }
  
//   isSatisfied(item){
//     return item.size === this.size;
//   }
// }





// const apple = new Product('Apple', color.green, size.small);
// const tree = new Product('Tree', color.green, size.large);
// const house = new Product('House', color.blue, size.large);

// const products = [apple, tree, house];

// const PF = new ProductFilter();


// for(let p of  PF.filterByColor(products, color.green))
// {
//   console.log(`${p.name} is green`);
// }


// for(let p of  PF.filterByColor(products, color.blue))
// {
//   console.log(`${p.name} is blue`);
// }


// class BetterFilter {
  
//   filter(items, spec){
// //     console.log(items, spec)
//     return items.filter(x => spec.isSatisfied(x));
//   }
  
// }
// class AndSpecification{
//   constructor(...specs){
//     this.specs = specs;
//   }
  
//   isSatisfied(item){
//     return this.specs.every(x => x.isSatisfied(item))
//   }
  
// }

// const bf = new BetterFilter();

// console.log("Green product new approach");
// // console.log(bf.filter(products, new ColorSpecification(color.green)))
// for(let p of bf.filter(products, new ColorSpecification(color.green))){
  
//   console.log(`${p.name} is green`);
// }

// console.log("large and green");
// const spec = new AndSpecification(
// new ColorSpecification(color.green),
//   new SizeSpecification(size.large)
// )

// for(let p of bf.filter(products,spec)){
//   console.log("large and green :", p.name)
// }


// You can seperate out the different specifications classes and build combinators out of it. "Just extend try not to modify"



// Liskov principle



