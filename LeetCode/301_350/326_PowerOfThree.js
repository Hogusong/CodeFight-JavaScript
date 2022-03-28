/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n < 2) return n == 1;
  let x = 3;
  while (n % 3 == 0) {
      if (n / x < 1) x = 3;
      else {
          n = n / x;
          x *= 3;
      }
  }
  return n == 1
};