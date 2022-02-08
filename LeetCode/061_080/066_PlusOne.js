/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  let up = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
      const n = digits[i] + up
      digits[i] = n % 10;
      up = n > 9 ? 1 : 0;
  }
  if (up > 0) return [up, ...digits];
  return digits;
};