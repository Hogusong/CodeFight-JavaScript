/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 5 > 0) continue;
    let div = 5;
    while (i % div === 0) {
      count++;
      div *= 5;
    }
  }
  return count;
};

var trailingZeroes = function(n) {
  let count = 0;
  while (n > 0) {
      n = Math.floor(n / 5);
      count += n;
  }
  return count;
};