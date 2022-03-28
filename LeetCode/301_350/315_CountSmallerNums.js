/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  Time Limit Exceeded.  62/65 test cases passed.
var countSmaller = function(nums) {
  const count = new Array(nums.length - 1);
  count.push(0);
  for (let i = count.length - 2; i >= 0; i--) {
      let n = 0;
      for (let j = i + 1; j < count.length; j++) {
          if (nums[j] < nums[i]) n++;
          if (nums[j] == nums[i]) {
              n += count[j];
              break;
          }
      }
      count[i] = n;
  }
  return count;
};

//  Time Limit Exceeded.  63/65 test cases passed.
var Node = function(val) {
  this.val = val;
  this.smallCount = 0;
  this.count = 0; 
  this.left = null;
  this.right = null
}

var countSmaller = function(nums) {
  const n = nums.length;
  if (n == 1) return [0];
  const ans = new Array(n);
  const root = new Node(nums.at(-1));
  
  const insert = (num) => {
      let node = root, sum = 0;
      while (node.val != num) {
          if (node.val > num) {
              if (!node.left) node.left = new Node(num)
              node.smallCount++;
              node = node.left;
          } else {
              sum += node.smallCount + node.count;
              if (!node.right) node.right = new Node(num)
              node = node.right;
          }
          
      }
      node.count++;
      return sum + node.smallCount;
  }
  
  for (let i = n - 1; i >= 0; i--) {
      ans[i] = insert(nums[i]);
  }
  
  return ans;
};