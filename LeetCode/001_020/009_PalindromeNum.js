/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  if (x < 0) return false;
  let n = 0, y = x;
  while (y > 0) {
      n = n * 10 + (y % 10);
      y = Math.floor(y / 10);
  }
  return n == x;
};