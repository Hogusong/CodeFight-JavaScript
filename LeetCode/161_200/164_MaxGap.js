/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function(nums) {
  if (nums.length == 1) return 0;
  let min = nums[0], max = 0;
  
  for (let n of nums) {
      min = Math.min(min, n);
      max = Math.max(max, n);
  }
  
  let interval = Math.ceil((max - min) / (nums.length - 1));
  let bucketMin = new Array(nums.length).fill(Number.MAX_VALUE);
  let bucketMax = new Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == min || nums[i] == max) continue;
      let index = Math.floor((nums[i] - min) / interval);
      bucketMin[index] = Math.min(bucketMin[index], nums[i]);
      bucketMax[index] = Math.max(bucketMax[index], nums[i]);
  }
  
  let prev = min, maxG = 0;
  for (let i = 0; i < bucketMin.length; i++) {
      if (bucketMax[i] == -1) continue;
      maxG = Math.max(bucketMin[i] - prev, maxG);
      prev = bucketMax[i];
  }
  
  return Math.max(max - prev, maxG);
};