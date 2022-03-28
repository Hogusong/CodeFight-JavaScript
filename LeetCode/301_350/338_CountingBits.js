/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  const res = [0];
  for (let x = 1; x <= n; x++) {
      res[x] = (x % 2) + res[Math.floor(x / 2)];
  }
  return res;
};