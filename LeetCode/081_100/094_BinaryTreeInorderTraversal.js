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
 var inorderTraversal = function(root) {
  const result = [];
  
  const traversal = (node) => {
      if (!node) return;
      traversal(node.left)
      result.push(node.val);
      traversal(node.right);
  }
  
  traversal(root);
  return result;
}
