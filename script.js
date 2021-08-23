'use strict';


// Collecting values from objects and sets -->>

// same function for comparing two arrays and returns true if they have same frequency of squared elements in the other one..

// Naive approach
function same(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;

    for (let i = 0; i < arr1.length; i++) {
        const index = arr2.indexOf(arr1[i] ** 2);
        if (index === -1)
            return false;
        arr2.splice(index, 1);
    }
    return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// better approach 
function same1(arr1, arr2) {

    if (arr1.length !== arr2.length)
        return false;

    const obj1 = {};
    const obj2 = {};
    for (let val of arr1) {
        obj1[val] = (obj1[val] || 0) + 1
    }
    for (let val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1
    }
    console.log(obj1);
    console.log(obj2);

    for (let key in obj1) {
        if (!(key ** 2) in obj2)
            return false;
        if (obj1[key] !== obj2[key ** 2])
            return false;
    }
    return true
}

console.log(same1([1, 2, 3, 2], [9, 1, 4, 4]));

function validAnagram(str1, str2) {
    if (str1.length !== str2.length)
        return false
    const obj1 = {}
    for (let c of str1)
        obj1[c] = (obj1[c] || 0) + 1;
    for (let c of str2) {
        if (!(c in obj1))
            return false;
        if (obj1[c] === 0)
            return false;
        obj1[c] = obj1[c] - 1;
    }
    return true;
}
console.log(validAnagram("rat", "atr"));


// Unique Numbers -->

const countUnique = (arr) => {
    let count = arr.length === 0 ? 0 : 1;
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            count++;
            i = j;
            j++
        }
        else {
            j++;
        }
    }
    return count;
}
console.log(countUnique([]));

// Without using an extra variable.
function countUniqueValues(arr) {

    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            ++i;
            arr[i] = arr[j]
            ++j
        } else {
            j++;
        }
    }
    return arr.length === 0 ? 0 : i + 1;
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7]));

// Max sum of n consecutive numbers -->

function maxSumSubArray(arr, n) {

    let max = 0;
    let sum = 0;
    let j = 0;
    let i = 0;
    while (j < arr.length) {
        if ((j - i) === n) {
            if (sum > max)
                max = sum;
            sum = 0;
            ++i;
            j = i;
        }
        else {
            sum += arr[j];
            j++;
        }
    }
    return max === 0 ? null : max;
}

console.log(maxSumSubArray([1, 2, 5, 2, 8, 1, 5], 4));

//  Alternate Less memory and more efficient

function maxSum(arr, n) {
    let max = 0
    let sum = 0;
    if (arr.length < n)
        return null;
    for (let i = 0; i < n; i++) {
        max += arr[i]
    }
    sum = max;
    for (let i = n; i < arr.length; i++) {
        sum = sum - arr[i - n] + arr[i];
        max = Math.max(sum, max);
    }
    return max;
}

console.log(maxSum([1, 2, 5, 2, 8, 1, 5], 4));


//  Frequency counter -->
function sameFrequency(a, b) {
    let lena = 0;
    let lenb = 0;
    let obj = {}
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
    let i = 0
    let avg = 0;
    let j = arr.length - 1;
    while (i < j) {
        avg = (arr[i] + arr[j]) / 2;
        if (avg === t)
            return true
        if (avg < t)
            i++;
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
        }
        else {
            j++;
        }
        if (i === str1.length)
            return true;
    }
    return false;
}

function maxSubarraySum(arr, n) {
    // add whatever parameters you deem necessary - good luck!
    let sum = 0;
    let max = 0;
    if (arr.length < n)
        return null;
    for (let i = 0; i < n; i++) {
        sum += arr[i]
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
        }
        else if (sum >= n) {
            min = Math.min(min, j - i)
            sum -= arr[i]
            i++
        }
        else {
            break;
        }
    }
    return min === Infinity ? 0 : min
}



function findLongestSubstring(str) {
    // add whatever parameters you deem necessary - good luck!
    let obj = {};
    let char;
    let longest = 0;
    let start = 0;
    for (let i = 0; i < str.length; i++) {
        char = str[i];
        if (obj[char]) {
            start = Math.max(start, obj[char])
        }
        longest = Math.max(longest, (i - start + 1))
        console.log(longest);
        obj[char] = i + 1;
    }
    return longest

}
console.log(findLongestSubstring("thecatinthehat"));


function power(a, b) {
    if (b == 0)
        return 1;
    if (b == 1)
        return a;
    return a * power(a, (b - 1))

}

let a = 0;
let b = 1;
let c = 0;

function fib(n) {
    if (n === 0)
        return c;
    a = b;
    b = c;
    c = a + b;
    return fib(n - 1)
}
console.log(fib(10))
console.log(c);

// Proper without variables
function fib1(n) {
    if (n <= 2)
        return 1
    return (fib1(n - 1) + fib1(n - 2))
}

console.log(fib1(4));

function reverse(str) {
    if (str.length === 0)
        return ''
    return str[str.length - 1].concat(reverse(str.slice(0, -1)))
}

let str1 = ""
let length = 0;
function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!
    length = Math.max(str.length, length);
    if (str.length === 0) {
        return
    }
    str1 += str[str.length - 1];
    isPalindrome(str.slice(0, -1))
    console.log(str1, str);
    if (str1 !== str && str.length === length)
        return false
    if (str1 === str)
        return true
}

console.log(isPalindrome("tacocat"));


// Pure recursion -->
function isPalindrome(str) {
    if (str.length <= 1)
        return true;
    let first = str[0];
    let last = str[str.length - 1];
    if (first === last) {
        let str1 = str.substring(1, str.length - 1);
        return isPalindrome(str1)
    } else {
        return false
    }
}