/*
Count subsets of a given array. The sum of each subset must be equal to target.
- All elements of the given array must be unique positive integers.
- The target must be a positive integer.
- Example:
  L = [3,1,5,6,2,4],   target = 10
  answer = 5  [1,2,3,4], [1,3,6], [1,4,5], [2,3,5], [4,6]

*** Optimal programming is the best of speed in my computer.
*** Because of the memory, my computer can process upto 22(length of array) for all programming
*** except the dynamic programming.
*** Only the dynamic programming can get the answer with the more extended length of Array.
*** In my computer, the length can be extended upto 1000.
*/

function countSubsets_BF(L, target) {
  const allSubsets = makeSubSets(L.slice());
  const result = [];
  allSubsets.forEach(ss => {
    let sum = 0;
    ss.forEach(e => sum += e);
    if (sum === target) result.push(ss)
  })
  return result.length;
}

function makeSubSets(L) {
  let result = [[]];
  for (let e of L) {
    const temp = [];
    for (let ss of result) {
      const newArr = ss.slice();
      newArr.push(e);
      temp.push(newArr);
    }
    result = result.concat(temp);
  }
  return result;
}

function countSubsetsRec(L, target, count) {
  if (L.length === 0) return 0;
  if (L[0] === target) count++;
  let withCount = 0;
  let withoutCount = 0;
  if (L[0] < target) withCount = countSubsetsRec(L.slice(1), target - L[0], 0);
  withoutCount = countSubsetsRec(L.slice(1), target, 0);
  return count + withCount + withoutCount;
}

function countSubsetsRec2(L, target) {
  if (L.length === 0) return ;
  if (L[0] === target) count++;
  if (L[0] < target) countSubsetsRec2(L.slice(1), target - L[0]);
  countSubsetsRec2(L.slice(1), target);
}

function countSubsetsOptimal(L, index, target, count) {
  if (index === L.length) return 0;
  if (L[index] === target) count++;
  let withCount = 0;
  let withoutCount = 0;
  index++;
  if (L[index-1] < target) withCount = countSubsetsOptimal(L, index, target - L[index-1], 0);
  withoutCount = countSubsetsOptimal(L, index, target, 0);
  return count + withCount + withoutCount;
}

function countSubsetsDynamic(dict, L, index, target, count) {
  if (index === L.length) return 0;
  if (L[index] === target) count++;
  index++;
  let within = '';
  let without = '' + index + ':' + target;
  if (L[index-1] < target) {
    within += index + ':' + (target - L[index-1]);
    if (!dict[within]) {
      dict[within] = countSubsetsDynamic(dict, L, index, target - L[index-1], 0);
    }
  }
  if (!dict[without]) {
    dict[without] = countSubsetsDynamic(dict, L, index, target, 0);
  }
  return count + dict[without] + ((within != '') ? dict[within] : 0) ;
}

console.time('Time to initialize');
L = makeList(20);
target = 100;
console.timeEnd('Time to initialize');
console.log('Array.length = ' + L.length + ',  target = ' + target + '\n')
console.log();

console.time("Time for Bruit-Force Solution ");
console.log('Answer =', countSubsets_BF(L.slice(), target));
console.timeEnd("Time for Bruit-Force Solution ");
console.log();

console.time("Time for Recursion Solution ");
console.log('Answer =', countSubsetsRec(L.slice(), target, 0));
console.timeEnd("Time for Recursion Solution ");
console.log();

count = 0
console.time("Time for Recursion Solution ");
countSubsetsRec2(L.slice(), target);
console.log('Answer =', count);
console.timeEnd("Time for Recursion Solution ");
console.log();

count = 0
console.time("Time for Optimal Solution ");
console.log('Answer =', countSubsetsOptimal(L.slice(), 0, target, 0));
console.timeEnd("Time for Optimal Solution ");
console.log();

// Only the dynamic programming can get the answer with the more extended length of Array.
console.time('Time to initialize');
L = makeList(200);
target = 500;
dict = {}
console.timeEnd('Time to initialize');
console.log('Array.length = ' + L.length + ',  target = ' + target + '\n')

console.time("Time for Dynamic Solution ");
console.log('Answer =', countSubsetsDynamic(dict, L.slice(), 0, target, 0));
console.timeEnd("Time for Dynamic Solution ");

function makeList(max) {
  let count = 0
  const result = []
  while (count < max) {
    const e = Math.floor(Math.random()*max*2) + 1;
    if (!result.includes(e)) {
      result.push(e);
      count++;
    }
  }
  return result;
}
