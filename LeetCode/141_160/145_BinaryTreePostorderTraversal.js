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
 var postorderTraversal = function(root) {
  const nums = [];
  
  const traversal = (node) => {
      if (!node) return;
      traversal(node.left);
      traversal(node.right);
      nums.push(node.val);
  }
  
  traversal(root);
  return nums;
}