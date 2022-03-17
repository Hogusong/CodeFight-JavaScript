/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while (num > 9) {
      let n = 0;
      while (num > 0) {
          n += num % 10;
          num = Math.floor(num / 10);
      }
      num = n;
  }
  return num;
};

var addDigits = function(num) {
  if (num == 0) return 0;
  // 18, 27, 36, 45, ...
  if (num % 9 == 0) return 9;
  // All other numbers
  return num % 9;
};