/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
  const lB = getBit(left);
  const rB = getBit(right);
  if (rB.length > lB.length) return 0;
  const arr = [];
  let count = 0;
  for (let i = 0; i < rB.length; i++) {
      arr[i] = +rB[i];
      if (arr[i] == 0) count++;
  }
  right--;
  while (right >= left) {
      const bit = getBit(right--);
      for (let i = 0; i < bit.length; i++) {
          if (arr[i] != 0 && bit[i] === '0') {
              arr[i] = 0;
              count++;
              if (count == rB.length) return 0;
          }
      }
  }
  let n = 0;
  for (let x of arr) {
      if (n === 0 && x === 0) continue;
      n = n * 2 + x;
  }
  return n;
};

function getBit(n) {
  let ans = '';
  while (n > 0) {
      const b = n % 2;
      n = Math.floor(n / 2);
      ans = b + ans;
  }
  return ans;
}