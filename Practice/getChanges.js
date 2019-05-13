const amount = 161;  // try with 222
const numbers = [5, 1, 25, 10, 21];

// Fastest solution
function getChangeObjLoop(arr, amount, obj={0: []}) {
  while (true) {
    const temp = {...obj};
    obj = {};
    for (let key in temp) {
      const diff = amount - key;
      if (arr.includes(diff)) {
        return [...temp[key], diff];
      }
      if (key < amount) {
        for (let coin of arr) {
          const newKey = +key + coin
          obj[newKey] = [...temp[key], coin];
        }
      }
    }
  }
}

console.log();
console.time('Time Object & Loop');
result = getChangeObjLoop(numbers, amount, [[]]);
console.timeEnd('Time Object & Loop')
console.log(result);

// no good for big amount (failed - JavaScript heap out of memory)
function getChangeLoop(arr, amount, que=[[]]) {
  while (true) {
    const temp = [...que];
    que = []
    for (let coin of arr) {
      for (let t of temp) {
        const sum = getSum(t);
        if (sum + coin === amount) {
          return [...t, coin];
        } if (sum + coin < amount) {
          que.push([...t, coin]);
        }
      }
    }
  }
}

console.log();
console.time('Time just Loop')
result = getChangeLoop(numbers, amount)
console.timeEnd('Time just Loop')
console.log(result);

// no good for big amount (failed - JavaScript heap out of memory)
function getChangeLoopRec(arr, amount, que) {
  const temp = [...que];
  que = [];
  arr.forEach(coin => {
    temp.forEach(t => {
      const sum = getSum(t);
      if(sum+coin <= amount) {
        que.push([...t, coin])
      }
    });
  });
  const answer = que.find(q => getSum(q) === amount);
  return answer ? answer : getChangeLoopRec(arr, amount, [...que])
}

console.log();
console.time('Time Loop & Recursion')
result = getChangeLoopRec(numbers, amount, [[]])
console.timeEnd('Time Loop & Recursion')
console.log(result);

// Slowest solution
// really no good for big amount (failed - JavaScript heap out of memory)
function getChangesRec(arr, amount, changes, shortest) {
  if (amount === 0){    return [...changes];  }
   
  for (let i=0; i<arr.length; i++) {
    if (amount >= arr[i] && (shortest.length < 1 || changes.length < shortest.length)) {
      const newChanges =  getChangesRec(arr, amount-arr[i], [...changes, arr[i]], [...shortest])
      if (newChanges) {
        shortest = newChanges;
      }
    }
  }
  return shortest;
}

console.log();
console.time('Time Recursion');
answer = getChangesRec(numbers, amount, [], [])
console.timeEnd('Time Recursion')
console.log(answer);


function getSum(temp) {
  let sum = 0;
  temp.forEach(amt => sum += amt);
  return sum;
}
