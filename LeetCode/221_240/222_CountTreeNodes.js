/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var countNodes = function(root) {
  if (!root) return 0;
  
  const dfs = (node) => {
      if (!node) return 0;
      let left = 0, right = 0;
      if (node.left) left = 1 + dfs(node.left);
      if (node.right) right = 1 + dfs(node.right);
      return left + right;
  }
  
  return 1 + dfs(root);
};