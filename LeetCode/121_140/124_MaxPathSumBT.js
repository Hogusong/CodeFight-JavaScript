/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
  let maxPS = -Number.MAX_VALUE;
    
  const getMaxSum = (node) => {
      if (!node) return 0;

      const top = node.val;
      const left = getMaxSum(node.left);
      const right = getMaxSum(node.right);

      maxPS = Math.max(maxPS, top, top + left, top + right, left + top + right);
      
      return Math.max(top, top + left, top + right);
  }
  
  getMaxSum(root);
  return maxPS;
};
