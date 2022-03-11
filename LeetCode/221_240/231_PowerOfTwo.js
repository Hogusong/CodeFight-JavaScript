/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  while (n > 1) {
      if (n % 2 == 1) return false;
      n = n / 2;
  }
  return true;
};

var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  let power = 2;
  while (n > power) {
      power = power * 8;
  }
  while (n < power) power = power / 2
  return n === power;
};