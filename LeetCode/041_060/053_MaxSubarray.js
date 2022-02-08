/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let maxS = nums[0], sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
      sum = Math.max(sum + nums[i], nums[i]);
      maxS = Math.max(maxS, sum);
  }
  return maxS;
}
