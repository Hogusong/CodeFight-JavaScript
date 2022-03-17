/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let product = 1, countZero = 0;
  for (let x of nums) {
      if (x === 0) countZero++;
      else product *= x;
  }
  for (let i = 0; i < nums.length; i++) {
      if (countZero > 1) nums[i] = 0;
      else if (countZero === 1) {
          if (nums[i] === 0) nums[i] = product;
          else nums[i] = 0;
      } else nums[i] = product / nums[i]
  }
  return nums;
};

var productExceptSelf = function(nums) {
    const res = [1];
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i-1] * nums[i-1];
    }
    console.log(res)
    let postfix = 1
    for (let i = nums.length-1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res;
};