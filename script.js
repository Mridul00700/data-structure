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


