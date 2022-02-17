/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  const nums = [];
  
  const traversal = (node) => {
      if (!node) return;
      nums.push(node.val);
      traversal(node.left);
      traversal(node.right);
  }
  
  traversal(root);
  return nums;
}