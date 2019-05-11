const amount = 222;
const numbers = [5, 1, 25, 10, 21];
let answer = [];

// run fast to get a result
function getChangesRec(arr, amount, changes) {
  if (amount === 0){
    answer = [...changes];
    return
  } else if (answer.length > 0 && answer.length <= changes.length) {
    return
  } 
  for (let i=0; i<arr.length; i++) {
    if (amount >= arr[i]) {
      changes.push(arr[i]);
      return getChangesRec(arr, amount-arr[i], [...changes])
    }
  }
}

console.time('Time this');
// const soredNumbers = numbers.sort((a,b) => b - a);
// getChangesRec(soredNumbers, amount, [])
getChangesRec(numbers, amount, [])
console.log(answer);
console.log(getSum(answer), answer.length);
console.timeEnd('Time this')

// possible to get smallest count of changes
function getChangeObjLoop(arr, amount, obj={0: []}) {
  let answer = null;
  let count = 0
  while (!answer) {
    const temp = {...obj};
    obj = {};
    for (let key in temp) {
      const diff = amount - key;
      if (arr.includes(diff)) {
        answer = temp[key].slice();
        answer.push(diff);
        return answer
      }
      if (key < amount) {
        for (let coin of arr) {
          const xxx = temp[key].slice()
          xxx.push(coin);
          const newKey = +key + coin
          obj[newKey] = xxx;
        }
      }
    }
  }
  return answer;
}

// possible to get smallest count of changes
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

// possible to get smallest count of changes
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

function getSum(temp) {
  let sum = 0;
  temp.forEach(amt => sum += amt);
  return sum;
}

console.time('Time this');
result = getChangeObjLoop(numbers, amount, [[]]);
console.log(result);
console.log(getSum(result), result.length);
console.timeEnd('Time this')

//  no good for big amount (failed - JavaScript heap out of memory)
console.time('Time this')
result = getChangeLoop(numbers, amount)
console.log(result);
console.timeEnd('Time this')

/*
//  really no good for big amount (failed - JavaScript heap out of memory)
console.time('Time this')
result = getChangeLoopRec(numbers, amount, [[]])
console.log(result);
console.timeEnd('Time this')
*/
