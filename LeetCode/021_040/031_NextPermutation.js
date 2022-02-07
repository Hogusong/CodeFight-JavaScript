/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
  if (nums.length < 2) return nums;

  let i = nums.length-2;
  while (i >= 0 && nums[i] >= nums[i+1]) i--;

  if (i >= 0) {
    let j = nums.length-1;
    while (j > i && nums[i] >= nums[j]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
    
  i++;
  j = nums.length-1;
  while (i < j) {
      const temp = nums[i];
      nums[i++] = nums[j];
      nums[j--] = temp;
  }
};