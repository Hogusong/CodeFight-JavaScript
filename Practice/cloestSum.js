/*
Get pairs of the closest sum against a target number from 2 given integer arrays.
- The length of 2 arrays should have same.
- All elements of each array should be unique.
- Example
    given info: [-1, 3, 8, 12, 9, 5] and [4, 13, 2, 10, 5, 20],  target = 24
    answer: [[3, 20], [12, 13], [5, 20]]
*/

function getPairStandard(L1, L2, target) {
  if (L1.length != L2.length || L1.length > 50000) {
    console.log("Failed to process: array.length is too big.")
    return [];
  }
  let result = [];
  let sum = 0;
  const maxL1 = Math.max(...L1);
  const maxL2 = Math.max(...L2);
  if (maxL1 + maxL2 < target) return [[maxL1, maxL2]];
  let diff = 2 * target;
  for (let i=0; i<L1.length; i++) {
    for (let j=L2.length-1; j>=0; j--) {
      count++;
      if (Math.abs(target - L1[i] - L2[j]) > diff) continue;
      if (Math.abs(target - L1[i] - L2[j]) < diff) {
        result = []
        diff = Math.abs(target - L1[i] - L2[j])
      }
      result.push([L1[i], L2[j]])
    }
  }
  return result;
}

function getPairOptimal(L1, L2, target) {
  const dict = {};
  let result = [];
  const maxL1 = Math.max(...L1);
  const maxL2 = Math.max(...L2);
  if (maxL1 + maxL2 <= target) return [[maxL1, maxL2]];
  let diff = target * target;
  L2.forEach(e => dict[e] = e);
  for (let i=0; i<diff; i++) {
    for (let e of L1) {
      count++;
      if (dict[target-e-i]) {
        if (i < diff) {  result = [];  }
        diff = i;
        result.push([e, dict[target-e-i]]);
      }
      if (i > 0 && dict[target-e+i]) {
        if (i < diff) {  result = [];  }
        diff = i;
        result.push([e, dict[target-e+i]]);
      }
    }
  }
  return result;
}

function getPairSet(L1, L2, target) {
  const dict = {};
  for (let e1 of L1) {}
}

count = 0;
maxCount = 5000;
// let L1 = makeList(maxCount);
// let L2 = makeList(maxCount);
// let target = Math.floor(Math.random() * maxCount * 10) + (maxCount % 19);

let L1 = [-1, 3, 7, 12, 9, 5, 15];
let L2 = [4, 13, 2, 10, 5, 20, 16];
let target = 24

console.log('\nArray length is: ' + maxCount + ',  target sum: ' + target)

console.time("Time for Bruit-Force Solution ");
const answer1 = getPairStandard(L1.slice(), L2.slice(), target);
// console.log('count:', count);
console.timeEnd("Time for Bruit-Force Solution ");

count = 0;
console.time("Time for Optimal Solution ");
const answer2 = getPairOptimal(L1.slice(), L2.slice(), target);
// console.log('count:', count);
console.timeEnd("Time for Optimal Solution ");
console.log(isSame(answer1, answer2) + ',  length of answer: ' + answer1.length);

console.time("Time to get max ");
const maxL1 = Math.max(...L1);
const maxL2 = Math.max(...L2);
console.timeEnd("Time to get max ");

console.time("Time for sorting ");
L1.sort((a,b) => a - b);
L2.sort((a,b) => a - b);
console.timeEnd("Time for sorting ");

function makeList(max) {
  let count = 0
  const result = []
  while (count < max) {
    const affix = Math.random() < 0.25 ? -1 : 1;
    const e = affix * Math.floor(Math.random()*max*10);
    if (!result.includes(e)) {
      result.push(e);
      count++;
    }
  }
  return result;
}

function isSame(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i=0; i<arr1.length; i++) {
    if (arr1[i][0] != arr2[i][0] || arr1[i][1] != arr2[i][1]) return false;
  }
  return true;
}

