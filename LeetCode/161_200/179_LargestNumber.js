/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
  nums = nums.sort((a, b) => {
      const ab = a.toString() + b.toString();
      const ba = b.toString() + a.toString();
      return ab > ba ? -1 : 1;
  })
  const str = nums.join('');
  return +str === 0 ? '0' : str;
};