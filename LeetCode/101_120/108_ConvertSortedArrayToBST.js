/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
  const len = nums.length;
  if (len < 1) return null;
  if (len == 1) return new TreeNode(nums[0]);
  const m = Math.floor(len / 2);
  const node = new TreeNode(nums[m]);
  node.left = sortedArrayToBST(nums.slice(0,m));
  node.right = sortedArrayToBST(nums.slice(m+1));
  return node;
};

// Using index instead of dividing nums array in two.
var sortedArrayToBST = function(nums) {
  if (nums.length < 1) return null;
  if (nums.length < 2) return new TreeNode(nums[0]);
  
  const buildBST = (s, e) => {
      if (s > e) return null;
      if (s == e) return new TreeNode(nums[s]);
      const m = Math.floor((s + e) / 2);
      const node = new TreeNode(nums[m]);
      node.left = buildBST(s, m-1);
      node.right = buildBST(m+1, e);
      return node;
  }
  
  return buildBST(0, nums.length - 1)
};