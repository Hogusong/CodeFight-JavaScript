/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  let maxP = nums[0], cMax = 1, cMin = 1;
  for (let x of nums) {
      if (x == 0) {
          cMax = 1;
          cMin = 1;
      }
      const temp = cMin;
      cMin = Math.min(x, cMax * x, cMin * x);
      cMax = Math.max(x, cMax * x, temp * x);
      maxP = Math.max(maxP, cMax);
  }
  return maxP;
};