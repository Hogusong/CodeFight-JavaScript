/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  const prefix = x < 0 ? -1 : 1;
  x = x * prefix;
  let n = 0;
  while (x > 0) {
      n = n * 10 + (x % 10);
      x = Math.floor(x / 10)
  }
  n = n * prefix;
  if (n < -(2**31) || n > 2**31-1) return 0;
  return n;
};