/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  let n = Math.floor(x / 2);
  while (n * n > x) n = Math.floor(n / 2);
  while (n * n < x) n++;
  if (n * n == x) return n;
  return n - 1;
};