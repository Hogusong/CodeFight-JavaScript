/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k === 1) return nums;
  const output = [];
  let maxN = getMax(nums, 0, k-1);
  output.push(maxN);
  for (let i = k; i < nums.length; i++) {
      if (nums[i] >= maxN) maxN = nums[i];
      else if (nums[i - k] === maxN) {
          maxN = getMax(nums, i-k+1, i);
      }
      output.push(maxN);
  }
  return output;
};

function getMax(nums, i, to) {
  let maxN = nums[i++];
  while (i <= to) maxN = Math.max(maxN, nums[i++]);
  return maxN;
}