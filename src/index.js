'use strict';
// FROM INTERVIEWS
// 1
/**
 * @param {number} array
 * @param {number} target
 * @return {number}
 * f([1,2,3,1,2,3],3) -> 2
 */
function findFirstLeft(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}
//  console.log(findFirstLeft([1,2,3,1,2,3], 3));

// 2
/**
 * @param {number} array
 * @param {number} target
 * @return {number}
 * f([1,2,3,1,2,3],3) -> 5
 */

function findFirstRight(array, target) {
  let counter = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) counter = i;
  }
  return counter;
}
// console.log(findFirstRight([1,2,3,1,2,3], 3));

// 3
/**
 * @param {string} str
 * @return {boolean}
 * f('ana') -> true
 */
function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}
// console.log(isPalindrome('ana')); // true

// 4
/**
 * @param {string[]} arr
 * @param {number} target
 * @return {string[]}
 * f(["Mark", "John", "Anna", "Maria"]) -> ["Mark", "John", "Anna"]
 */
function findByParam(arr, target) {
  return arr.filter((elem) => elem.length === target);
}
// console.log(findByParam(["Mark", "John", "Anna", "Maria"]));

// 5
/**
 * @param {string} word
 * @return {number}
 * f('wolf') -> 1
 */
function vowelsCounter(word) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (VOWELS.includes(word[i])) counter++;
  }
  return counter;
}
// console.log(vowelsCounter('wolf'));

function vowelsCounter1(word) {
  const matched = word.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
}
console.log(vowelsCounter1('wolf'));

// 6
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * f(1,5) -> 15
 */
function getSumOfTwoNumsRange(a, b) {
  const start = a > b ? b : a;
  const end = a > b ? a : b;
  let counter = 0;
  for (let i = start; i <= end; i++) {
    counter += i;
  }
  return counter;
}
// console.log(getSumOfTwoNumsRange(1,5));

// 7
/**
 * @param {string} str
 * @return {string}
 * f('testing') -> 't'
 */
function findMiddle(str) {
  const isEven = str.length % 2 === 0 ? true : false;
  const oddMiddle = str[(str.length - 1) / 2];
  const evenMiddle = str[str.length / 2];
  return isEven ? evenMiddle : oddMiddle;
}
// console.log(findMiddle('test'));
// console.log(findMiddle('testing'));

// 8
/**
 * @param {number} num
 * @return {number}
 * f(25) -> 425 (4+25)
 */
const squareDigits = (num) => {
  return +num
    .toString()
    .split('')
    .map((n) => n * n)
    .join('');
};
// console.log(squareDigits(25));

// 9
/**
 * @param {string} str
 * @return {string}
 * f('Hell#o!') -> 'Hello!'
 */
const removeChar = (str, target) => {
  const targetRegex = new RegExp(target, 'gi');
  return str.replace(targetRegex, '');
};
// console.log(removeChar('Hell#o!', '#'));

// 10
/**
 * @param {number[]} arr
 * @return {boolean}
 * f([2,4,5,1,3,3,7,8,9,10,300]) -> true
 */
function isRepeat(arr) {
  if (Array.isArray(arr)) {
    for (let i = 1; i < arr.length; i++) {
      const prev = arr[i - 1];
      if (prev === arr[i]) return true;
    }
  }
  return false;
}
// console.log(isRepeat(''));
// console.log(isRepeat([2,4,5,1,3,45,7,8,9,10,300]));
// console.log(isRepeat([1,1,2,4,5,1,3,3,7,8,9,10,300]));
// console.log(isRepeat([2,4,5,1,3,3,7,8,9,10,300]));

// 11
/**
 * @param {number[]} arr
 * @return {boolean}
 * f([1,2,3,4,5,6,7,8,3,9]) -> [3,3]
 */
function findRepeat(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
// console.log(findRepeat([1,2,3,4,5,6,7,8,3,9]));

function findRepeat1(arr) {
  const result = [];
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
  }
  for (const n of arr) {
    if (arr.indexOf(n) !== obj[n]) {
      result.push(n);
    }
  }
  return result;
}
console.log(findRepeat1([1, 2, 3, 4, 5, 6, 7, 8, 3, 9]));

// 12
/**
 * @param {number[]} arr
 * @return {boolean}
 * f([1,2,3,4,5,6,7,8,3,9]) -> [3,3]
 */
function findRepeats(arr) {
  const result = [];
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    cache[arr[i]] = cache[arr[i]] ? cache[arr[i]] + 1 : 1;
  }
  for (const n in cache) {
    if (cache[n] > 1) {
      const a = new Array(cache[n]).fill(n);
      result.push(a);
    }
  }
  return result;
}
// console.log(findRepeats([1,2,3,4,5,3,6,7,5,8,9,5])); // [[3,3], [5,5,5]]

// 13
// new  Promise(function(resolve, reject) {
//   return new Promise(function(resolve, reject) {
//     return resolve(setTimeout(function() {
//       console.log(1)
//     }, 1000));
//   })
// });
// new  Promise(function(resolve, reject) {
//   return resolve(console.log(2));
// });
// console.log(3);
// var promise = new Promise(function(resolve, reject) {
//   return reject(console.log(4));
// });
// setTimeout(function() {
//   console.log(5);
// },0)
// function main() {
//   console.log(6);
// }
// promise.then(function(success) {
//   console.log(7);
// }, function (error) {
//   console.log(8);
// });

// 14
/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 * @param {number} target
 * @return {number}
 * f([0,0,0,0,1,2,3,4,5,6,0,], 1, 5, 0) -> 3
 */
var nums = [0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 0, 0];
function halfIntervalTargetCounter(arr, l, r, target) {
  var counter = 0;
  for (var i = l; i < r; i++) {
    if (arr[i] === target) counter++;
  }
  return counter;
}
// console.log(halfIntervalTargetCounter(nums, 1, 5, 0));

// 15
/**
 * @param {number[]} nums
 * @return {boolean}
 * f([2,3,5,1,6,7,8,10,100], 5) -> true
 * f([2,3,5,1,6,7,8,10,100], 1000) -> false
 */
const nums = [2, 3, 5, 1, 6, 7, 8, 10, 100];
function isHaveSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
}
// console.log(isHaveSum(nums, 5));
// console.log(isHaveSum(nums, 1000));

// 16
/**
 * @param {string}
 * @param {number}
 * @param {number}
 * ...
 * @return {string}
 *...
 * func('!', 4, -10, 34, 0) -> '!4!-10!34!0'
 */
function withSeparator(...rest) {
  const [separator, ...values] = rest;
  return separator + values.join(separator);
}
// console.log(withSeparator('!', 4, -10, 34, 0));

// 17
/**
 * @param {object}
 * @return {boolean}
 *...
 * func({}) -> true
 */
function isEmptyObj(obj) {
  return Object.keys(obj).length > 0 ? false : true;
}
// console.log(isEmptyObj({}));
// console.log(isEmptyObj({a: 'test'}));

function isEmptyObj1(obj) {
  for (const key in obj) {
    return false;
  }
  return true;
}
// console.log(isEmptyObj1({}));
// console.log(isEmptyObj1({a: 'test'}));

// 18
/**
 * @param {number[]}
 * @return {number}
 *...
 * func([3,5,2,1,3,7,66,8,9,4,100,45]) -> 100
 */
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(findMax([3,5,2,1,3,7,66,8,9,4,100,45]));

// 19
/**
 * @param {string[]}
 * @return {string}
 *...
 * func(['ab', 'a', 'abc']) -> a
 */
const wordsArr = ['kryliaSovetov', 'zenit', 'spartak'];
function getShortestStrFromArr(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < min.length) {
      min = arr[i];
    }
  }
  return min;
}
// console.log(getShortestStrFromArr(wordsArr)); //  zenit

const wordsArr1 = ['mu', 'kryliaSovetov', 'zenit', 'spartak', 'sochi', 'mc'];
function getShortestStrFromArr1(arr) {
  let min = arr[0];
  const result = [];
  for (const word of arr) {
    if (word.length < min.length) {
      min = word;
    }
  }
  for (const word of arr) {
    if (word.length === min.length) {
      result.push(word);
    }
  }
  return result.length > 0 ? result : min;
}
// console.log(getShortestStrFromArr1(wordsArr1)); //  ['mu', 'mc']

// 20
/**
 * @param {number}
 * @return {void}
 *...
 * func(1) -> 1...,2...,3...,4...,5...,6...,7...,8...,9...,10....
 */
function periodOutput(interval) {
  let counter = 1;
  setInterval(() => {
    if (counter <= 10) {
      console.log(counter);
      counter++;
    }
    return;
  }, 1000 * interval);
}
// console.log(periodOutput(1));

// 21
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 * func([1,2,3,4,5,6], 6) -> [[1,5], [2,4]];
 */
function findSum(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        const pair = [arr[i], arr[j]];
        result.push(pair);
      }
    }
  }
  return result;
}

function findSum1(arr, target) {
  const result = [];
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
  }
  for (const num in obj) {
    const secondNum = target - num;
    if (+num + secondNum === target) {
      if (secondNum > num) {
        result.push([+num, secondNum]);
      }
    }
  }
  return result;
}

// 22
/**
 * @param {string[]} str
 * @return {string[][]}
 * f(['ana', 'nan', 'pie', 'cort', 'iep']) -> [['ana', 'nan], ['pie', 'iep']]
 */
function groupAnagrams(arr) {
  const temp = [];
  const result = [];
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const sortedWord = arr[i].toLowerCase().split('').sort().join('');
    temp.push(sortedWord);
    set.add(sortedWord);
  }
  for (const word of set) {
    const group = [];
    for (let i = 0; i < temp.length; i++) {
      if (word === temp[i]) {
        group.push(arr[i]);
      }
    }
    result.push(group);
  }
  return result;
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [["ate","eat","tea"], ["nat","tan"], ["bat"]]

function groupAnagrams1(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].toLowerCase().split('').sort().join('').trim();
    const value = map.has(sorted) ? map.get(sorted) : [];
    value.push(arr[i]);
    map.set(sorted, value);
  }
  return [...map.values()];
}
// console.log(groupAnagrams1(["eat","tea","tan","ate","nat","bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams2(arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].toLowerCase().split('').sort().join('').trim();
    if (hash[sorted]) {
      hash[sorted].push(arr[i]);
    } else {
      hash[sorted] = [arr[i]];
    }
  }
  return Object.values(hash);
}
// console.log(groupAnagrams2(["eat","tea","tan","ate","nat","bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]

// 23
/**
 * @param {string} str
 * @return {number}
 * f('ababa') -> 'a'
 */
function popularSymbol(str) {
  let newStr = str.replace(/\s/g, '');
  let ans = '';
  let counter = 0;
  for (let i = 0; i < newStr.length; i++) {
    let currentCounter = 0;
    for (let j = 0; j < newStr.length; j++) {
      if (str[i] === str[j]) {
        currentCounter += 1;
      }
    }
    if (currentCounter > counter) {
      ans = str[i];
      counter = currentCounter;
    }
  }
  return ans;
}
// console.log(popularSymbolObj('ababa')) // 'a'

function popularSymbolObj1(str) {
  let newStr = str.replace(/\s/g, '');
  let ans = '';
  let counter = 0;
  let obj = {};
  for (let i = 0; i < newStr.length; i++) {
    obj[newStr[i]] = obj[newStr[i]] ? obj[newStr[i]] + 1 : 1;
  }
  for (let key in obj) {
    if (obj[key] > counter) {
      counter = obj[key];
      ans = key;
    }
  }
  return ans;
}
// console.log(popularSymbolObj1('ababa')) // 'a'

// 24
/**
 * @param {number[]} arr
 * @return {number[]}
 * f([10,-2,1,2,3,4,5]) -> [10,5]
 */
function findTwoMax(arr) {
  let max1 = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }
  return [max1, max2];
}
// console.log(findTwoMax([10,-2,1,2,3,4,5])); //  [10,5]

// 25
/**
 * @param {number[]} arr
 * @return {number}
 * f([10,-2,1,2,3,4,5]) -> -2
 */
function findMinEven(arr) {
  let flag = false;
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && (!flag || arr[i] < result)) {
      result = arr[i];
      flag = true;
    }
  }
  return result;
}
// console.log(findMinEven([10,-2,1,2,3,4,5])) //  -2

function findMinEven1(array) {
  const sorted = array.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] % 2 === 0) {
      return sorted[i];
    }
  }
  return 0;
}
// console.log(findMinEven1([10,-2,1,2,3,4,5])) //  -2

function findMinEven2(array) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (arr[i] < min) min = arr[i];
    }
  }
  return min;
}
//  console.log(findMinEven2([10,-2,1,2,3,4,5])) //  -2

function findMinEven3(arr) {
  return Math.min(...arr.filter((el) => el % 2 === 0));
}
console.log(findMinEven3([10, -2, 1, 2, 3, 4, 5])); //  -2

// 26
const counter = (num) => {
  let count = num || 0;
  return () => count++;
};
const count1 = counter(100);
count1();
count1();
count1();
// console.log(count1());  //  103

const counter1 = (function () {
  let counter = 0;
  return function () {
    return counter++;
  };
})();
counter1();
counter1();
counter1();
// console.log(counter1())  //  3

function counterF(num) {
  var counter = num || 0;
  return function () {
    return counter++;
  };
}
var count = counterF(100);
count();
count();
count();
// console.log(count());

// 27
/**
 * @param {string} str
 * @return {string}
 * f('AABBBCCCCDDDDDE') -> 'A2B3C4D5E1'
 */
const charCount = (str) => {
  const sortedStr = str.split('').sort().join('');
  const hashTable = {};
  let result = '';
  for (let i = 0; i < sortedStr.length; i++) {
    hashTable[sortedStr[i]] = hashTable[sortedStr[i]]
      ? hashTable[sortedStr[i]] + 1
      : 1;
  }
  for (const char in hashTable) {
    result += `${char}${hashTable[char]}`;
  }
  return result;
};
// console.log(charCount('BBBAADDDDDECCCC'));  //  'A2B3C4D5E1'

// 28
/**
 * @param {number} num
 * @return {number}
 * f(9) -> 34
 */
function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}
// console.log(fib(9));  //  34

function fib1(num) {
  const result = [0, 1];
  for (let i = 2; i <= num; i++) {
    let prev1 = result[i - 1];
    let prev2 = result[i - 2];
    result.push(prev1 + prev2);
  }
  return result[num];
}
// console.log(fib1(9));  //  34

// 29
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 * func([1,2,3,4,5,6], 6) -> [[1,5], [2,4]];
 */
function findAllUniqueSums(arr, target) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        if (arr[i] > arr[j]) {
          result.push([arr[i], arr[j]]);
        }
      }
    }
  }
  return result;
}
console.log(findAllUniqueSums([3, 5, 300, 1, 7, 4, -18, 2, 10, -5, 23, 11], 5));

function findAllUniqueSums1(arr, target) {
  var result = [];
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i];
  }
  console.log(obj);
  for (var num in obj) {
    var secondNum = target - num;
    if (obj[secondNum] && secondNum > num) {
      result.push([obj[secondNum], obj[num]]);
    }
  }
  return result;
}
console.log(
  findAllUniqueSums1([3, 5, 300, 1, 7, 4, -18, 2, 10, -5, 23, 11], 5),
);

// 30
/**
 * @param {string} str
 * @param {string} a
 * @param {string} b
 * @return {number}
 * f('abbaao', 'a', 'b') -> 4
 */
function getLatestCharIdx(str, a, b) {
  if (str) {
    if (!a && !b) return -1;
    return Math.max(a ? str.lastIndexOf(a) : -1, b ? str.lastIndexOf(b) : -1);
  }
  return -1;
}
// console.log(getLatestCharIdx('google', 'g', 'o'));  //  3
// console.log(getLatestCharIdx('aba', 'a', 'b'));  //  2
// console.log(getLatestCharIdx('', 'g', 'o'));   //  -1
// console.log(getLatestCharIdx('google', 'x', 'o')); //  2
// console.log(getLatestCharIdx('aba', '', '')); //  -1
// console.log(getLatestCharIdx('aba', '', 'b')) //  1

function getLatestCharIdx1(s, a, b) {
  if (typeof s !== 'string') return -1;
  if (s) {
    if (a && b) {
      let a_result = 0;
      let b_result = 0;
      for (let i = 0; i < s.length; i++) {
        if (s[i] === a) a_result = i;
        if (s[i] === b) b_result = i;
      }
      return a_result > b_result ? a_result : b_result;
    }
  }
  return -1;
}
// console.log(getLatestCharIdx1('aba', 'a', 'b'));  //  2
// console.log(getLatestCharIdx1('', 'g', 'o'));   //  -1
// console.log(getLatestCharIdx1('google', 'x', 'o')); //  2
// console.log(getLatestCharIdx1('aba', '', '')); //  -1
// console.log(getLatestCharIdx1('aba', '', 'b')) //  1

// 31
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * f('banana', 'avocado') -> 'avocado'
 */
function compare(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    return 'Type error';
  }
  if (!a && !b) return 'The strings are empty';
  if (!a) return b;
  if (!b) return a;
  const loweredA = a.toLowerCase();
  const loweredB = b.toLowerCase();
  for (let i = 0; i < loweredA.length; i++) {
    const charCodeA = loweredA[i] ? loweredA[i].charCodeAt() : -1;
    const charCodeB = loweredB[i] ? loweredB[i].charCodeAt() : -1;
    if (charCodeA < charCodeB) return a;
    if (charCodeA > charCodeB) return b;
    if (charCodeA === charCodeB) {
      if (loweredA.length > loweredB.length) {
        if (loweredB[loweredB.length - 1] === loweredA[i]) {
          return b;
        } else {
          continue;
        }
      } else if (loweredA.length < loweredB.length) {
        if (loweredA[loweredA.length - 1] === loweredB[i]) {
          return a;
        } else {
          continue;
        }
      } else {
        return a;
      }
    }
  }
}
// console.log(compare(-1, 30)); //  Type error
// console.log(compare('', '')); // The strings are empty
// console.log(compare('', 'a'));  //  a
// console.log(compare('a', ''));  //  a
// console.log(compare('banana', 'avocado'));  //  avocado
// console.log(compare('Banana', 'Avocado'));  //  Avocado
// console.log(compare('banana', 'Avocado'));  //  Avocado
// console.log(compare('ooooo', 'oo'));  //  oo
// console.log(compare('oo', 'oooooo')); //  oo
// console.log(compare('oz', 'oooooo')); //  oooooo
// console.log(compare('oooooo', 'oooooZ')); //  oooooo
// console.log(compare('ooo', 'ooo')); //  ooo

function compare1(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    console.error('Both arguments must be a string');
    return;
  }
  if (!a) return b;
  if (!b) return a;
  for (let i = 0; i < a.toLowerCase().length; i++) {
    if (b[i]) {
      if (a[i].toLowerCase() < b[i].toLowerCase()) {
        return a;
      } else if (a[i].toLowerCase() > b[i].toLowerCase()) {
        return b;
      } else continue;
    } else {
      return b;
    }
  }
  return a.length === b.length ? a + ' = ' + b : a;
}
// console.log(compare1(-1, 30)); //  Type error
// console.log(compare1('', '')); //  ''
// console.log(compare1('', 'a'));  //  a
// console.log(compare1('a', ''));  //  'a'
// console.log(compare1('ab', 'a'));  //  'a'
// console.log(compare1('banana', 'avocado'));  //  avocado
// console.log(compare1('Banana', 'Avocado'));  //  Avocado
// console.log(compare1('banana', 'Avocado'));  //  Avocado
// console.log(compare1('ooooo', 'oo'));  //  oo
// console.log(compare1('oo', 'oooooo')); //  oooooo
// console.log(compare1('oz', 'oooooo')); //  oooooo
// console.log(compare1('oooooo', 'oooooZ')); //oooooo
// console.log(compare1('ooo', 'ooo')); // ooo = ooo

function compare2(str1, str2) {
  const result = str1.toString().localeCompare(str2.toString());
  return result ? str2 : str1;
}
// console.log(compare2(-1, 30)); //  Type error
// console.log(compare2('', '')); //  ''
// console.log(compare2('', 'a'));  //  a
// console.log(compare2('a', ''));  //  'a'
// console.log(compare2('banana', 'avocado'));  //  avocado
// console.log(compare2('Banana', 'Avocado'));  //  Avocado
// console.log(compare2('banana', 'Avocado'));  //  Avocado
// console.log(compare2('ooooo', 'oo'));  //  oo
// console.log(compare2('oo', 'oooooo')); //  oooooo
// console.log(compare2('oz', 'oooooo')); //  oooooo
// console.log(compare2('oooooo', 'oooooZ')); //oooooo
// console.log(compare2('ooo', 'ooo')); //ooo

function compare3(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    return 'Both arguments must be a string';
  }
  if (!a) return b;
  if (!b) return a;
  var result = a.localeCompare(b);
  switch (result) {
    case 1:
      return b;
    case 0:
      return a + ' = ' + b;
    case -1:
      return a;
    default:
      return result;
  }
}
// console.log(compare3(-1, 30)); //  Type error
// console.log(compare3('', '')); //  ''
// console.log(compare3('', 'a'));  //  a
// console.log(compare3('a', ''));  //  'a'
// console.log(compare3('banana', 'avocado'));  //  avocado
// console.log(compare3('Banana', 'Avocado'));  //  Avocado
// console.log(compare3('banana', 'Avocado'));  //  Avocado
// console.log(compare3('ooooo', 'oo'));  //  oo
// console.log(compare3('oo', 'oooooo')); //  oooooo
// console.log(compare3('oz', 'oooooo')); //  oooooo
// console.log(compare3('oooooo', 'oooooZ')); //ooooo0
// console.log(compare3('ooo', 'ooo')); //ooo

// 32
/**
 * 'Hello'.repeating(3) -> 'Hello Hello Hello'
 */
String.prototype.repeating = function (num) {
  return new Array(num).fill(this).join(' ');
};
'Hello'.repeating(3);

String.prototype.repeating = function (num) {
  return this + ' '.repeat(num);
};
'Hello'.repeating(3);

// 33
Function.prototype.myBind = function (thisObj) {
  var self = this;
  return function () {
    self.call(thisObj);
  };
};
var test = someFn.myBind(someObj);

// 34
Array.prototype.myForEach = function (cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
[1, 2, 3].myForEach(function (el) {
  console.log(el);
});

// 35
String.prototype.reverse = function () {
  var result = '';
  var i = 0;
  while (i < this.length) {
    i++;
    result += this[this.length - i];
  }
  return result;
};
// console.log('test'.reverse()) //  'tset'

// 36
//  1 __proto__:
const obj1 = {
  name: 'Jack',
};
const obj2 = {};
obj2.__proto__ = obj1;
console.log(obj2.name); //  'Jack'

// 2  Object.create:
const obj1a = {
  name: 'Jack',
};
const obj2a = Object.create(obj1a);
// console.log(obj2a.name)  //  'Jack'

// 3  setPrototypeOf
const obj1b = {
  name: 'Jack',
};
const obj2b = {};
Object.setPrototypeOf(obj2b, obj1b);
// console.log(obj2b.name)  //  'Jack'

// 4  function-constructor with prototype (creating new object with given "this"):
//  Animal
function Animal(kind) {
  this.kind = kind || 'no kind';
}
Animal.prototype.getKind = function () {
  return this.kind;
};
Animal.prototype.setKind = function (k) {
  this.kind = k;
};
//  Dog
function Dog(name) {
  this.name = name || 'no name';
}
// ES5 sort of inheritance
Dog.prototype = new Animal();
Dog.prototype.constructor = Animal;
Dog.prototype.getName = function () {
  return this.name;
};
var myDog = new Dog('Jack');
// console.log(myDog.getName());
myDog.setKind('shepherd');
// console.log(myDog.getKind());

// 5 ES6 sort of inheritance with classes syntax sugar:
// Animal
class Animal {
  constructor(kind) {
    this.kind = kind || 'no kind';
  }
  setKind(k) {
    this.kind = k;
  }
  getKind() {
    return this.kind;
  }
}
// Dog
class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
  setName(n) {
    this.name = n;
  }
  getName() {
    return this.name;
  }
}
const myDoggy = new Dog('Jack');
myDoggy.setKind('shepherd');
// console.log(myDoggy.getName());  //  'Jack'
// console.log(myDoggy.getKind());  //  'shepherd'

// 37
Object.prototype.myCreate = function (o) {
  function F() {}
  F.prototype = o;
  return new F();
};

// 38
/**
 * @param {number[]} arr
 * @return {number}
 * f([2,4,6,8,9,10,12]) -> 9
 */
function findBlackSheep(arr) {
  let oddCounter = 0;
  let evenCounter = 0;
  let lastOdd = 0;
  let lastEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCounter++;
      lastEven = arr[i];
    } else {
      oddCounter++;
      lastOdd = arr[i];
    }
  }
  if (evenCounter + oddCounter > 3) {
    if (oddCounter > 1) return lastEven;
    else return lastOdd;
  } else return -1;
}
console.log(findBlackSheep([2, 4, 6, 8, 9, 10, 12]));

function findBlackShip1(arr) {
  const binaryArr = arr.map((x) => x % 2);
  const bArrSum = binaryArr.reduce((a, b) => a + b);
  const target = bArrSum > 1 ? 0 : 1;
  return arr[binaryArr.indexOf(target)];
}
console.log(findBlackSheep1([2, 4, 6, 8, 9, 10, 12]));

// 39
function plus(x) {
  return function (y) {
    return y + x;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
//  key of the algorithm
function expression(number, operation) {
  if (!operation) return number;
  return operation(number);
}
//
function three(operation) {
  return expression(3, operation);
}
function five(operation) {
  return expression(5, operation);
}
function seven(operation) {
  return expression(7, operation);
}
// console.log(five(plus(seven(minus(three())))));

// 40
/**
 * @param {number}
 * @return {void}
 *...
 * func(1) -> 1...,2......,3.........,4............,5...............,6..................,7.....................,8........................, ...10...
 */
function periodOutput(interval) {
  let counter = interval;
  const tick = 1000 * counter;
  setTimeout(() => {
    if (counter <= 10) {
      console.log(counter);
      counter++;
      periodOutput(counter);
    }
    return;
  }, tick);
}
// console.log(periodOutput(1))

// CODEWARS

// 42
function babySharkLyrics() {
  var d = 'doo '.repeat(5) + 'doo';
  var s = [
    'Baby shark',
    'Mommy shark',
    'Daddy shark',
    'Grandma shark',
    'Grandpa shark',
    "Let's go hunt",
  ];
  var res = '';
  for (var m of s) {
    var l = m + ', ' + d + '\n';
    var i = 0;
    while (i < 3) {
      res += l;
      i++;
    }
    res += m + '!' + '\n';
  }
  res += 'Run away,…';
  return res;
}
// console.log(babySharkLyrics());

function babySharkLyrics1() {
  var t = 'shark';
  var s = [
    'Baby ' + t,
    'Mommy ' + t,
    'Daddy ' + t,
    'Grandma ' + t,
    'Grandpa ' + t,
    "Let's go hunt",
  ];
  return s
    .map(
      (l) =>
        (l + ', ' + 'doo '.repeat(5) + 'doo' + '\n').repeat(3) + l + '!' + '\n',
    )
    .join('')
    .concat('Run away,…');
}
// console.log(babySharkLyrics1());

// 43
function convertStr(str) {
  var word = str.toLowerCase();
  var obj = {};
  var res = '';
  for (var i = 0; i < word.length; i++) {
    obj[word[i]] = obj[word[i]] ? obj[word[i]] + 1 : 1;
  }
  for (var letter of word) {
    if (obj[letter] > 1) {
      res += ')';
    } else {
      res += '(';
    }
  }
  return res;
}
// console.log(convertStr('din'))  //  "((("
// console.log(convertStr('recede'))  //  "()()()"
console.log(convertStr('Success')); //  ")())())"
// console.log(convertStr('(( @'))  //  "))(("
console.log(')()))()))))()(', convertStr('Supralapsarian')); // ")()))()))))()("
// console.log(convertStr('wORO(O)OOIOSOO')) //  '(((((((((((((('
// console.log('((((((((((((((' , convertStr('uSFSJ(SS)SPxSy')) //
