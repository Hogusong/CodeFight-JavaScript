/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  const set = new Set();
  while (true) {
      let strNum = '';
      while (n > 0) {
          strNum = (n % 10) + strNum;
          n = Math.floor(n / 10);
      }
      for (let x of strNum) {
          n += x * x;
      }
      if (n == 1) return true;
      if (set.has(n)) break;
      set.add(n);
  }
  return false;
};