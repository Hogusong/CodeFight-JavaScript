/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let str = '';
  while (n > 0) {
      const x = n % 2;
      n = Math.floor(n / 2);
      str = x + str;
  }
  let count = 0;
  for (let c of str) {
      if (c === '1') count++;
  }
  return count;
};

var hammingWeight = function(n) {
  let count = 0;
  while (n > 0) {
      if (n % 2 == 1) count++;
      n = Math.floor(n / 2);
  }
  return count;
};