function stairCase(n, steps) {
  if (n == 0) return 1;
  let sum = 0;
  for (let x of steps) {
    if (x < n) sum += stairCase(n-x, steps)
  }
  if (steps.includes(n)) sum++;
  return sum;
}

console.log(stairCase(7, [3,5]));
console.log(stairCase(7, [2,3]));
console.log(stairCase(6, [1,2,3]));
console.log(stairCase(4, [1,2]));
console.log(stairCase(0,[1]));
