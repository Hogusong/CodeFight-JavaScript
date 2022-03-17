/**
 * @param {number} n
 * @return {number}
 */
// Time Limit Exceeded. 500/596 test cases passed.
var nthUglyNumber = function(n) {
  let x = 1, count = 0;
  while (count < n) {
      let z = x;
      for (let y of [2, 3, 5]) {
          while (z % y == 0) z = z / y;
      }
      if (z == 1) count++;
      x++;
  }
  return x - 1;
};

var nthUglyNumber = function(n) {
  const nums = new Array(n+1);
  nums[0] = 1;
  let i2 = 0, i3 = 0, i5 = 0;
  for (let i = 1; i <= n; i++) {
    nums[i] = Math.min(nums[i2] * 2, nums[i3] * 3, nums[i5] * 5);
    if (nums[i] == nums[i2] * 2) i2++;
    if (nums[i] == nums[i3] * 3) i3++;
    if (nums[i] == nums[i5] * 5) i5++;
  }
  return nums[n-1];
}