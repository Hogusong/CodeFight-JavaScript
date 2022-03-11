/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [], prefix = 1;
  for (let i = 0; i < s.length; i++) {
      let n = 0;
      if (s[i] === ' ') continue;
      if ('0123456789'.includes(s[i])) {
          while (i < s.length && '0123456789'.includes(s[i])) {
              n = n * 10 + +s[i++];
          }
          i--;
          if ('*/'.includes(stack.at(-1))) {
              const op = stack.pop();
              const x = stack.pop();
              if (op === '*') stack.push(x * n * prefix);
              else {
                  if (x < 0) stack.push(-Math.floor(-1 * x / n) * prefix);
                  else stack.push(Math.floor(x / n) * prefix);
                  prefix = 1;
              }
          } else {
              stack.push(n * prefix);
          }
      } else if (s[i] === '+') prefix = 1;
      else if (s[i] === '-') prefix = -1;            
      else {
          stack.push(s[i]);
          prefix = 1;
      }
  }
  let sum = 0;
  for (let x of stack) sum += x;
  return sum;
};