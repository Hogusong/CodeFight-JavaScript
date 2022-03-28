/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
  this.nums = [...nums];
  this.sums = [nums[0]];
  for (let i = 1; i < this.nums.length; i++) {
      this.sums[i] = this.nums[i] + this.sums[i-1];
  }
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
  if (left == 0) return this.sums[right];
  return this.sums[right] - this.sums[left - 1];
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/