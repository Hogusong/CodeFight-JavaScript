/**
 * @param {number} n
 * @return {number}
 */
// Runtime Error.  33/35 test cases passed.
var bulbSwitch = function(n) {
  if (n < 2) return n;
  const bulbs = new Array(n+1).fill(1);
  bulbs[0] = 0;
  for (let i = 2; i <= n; i++) {
      for (let j = i; j <= n; j += i) 
          bulbs[j] = bulbs[j] ? 0 : 1;
  }
  
  let count = 0;
  for (let turnedOn of bulbs) if (turnedOn) count++;
  return count;
};

// Passed.
var bulbSwitch = function(n) {
  if (n < 2) return n;
  let x = 1;
  while (x * x <= n) x++;
  return x - 1;
};