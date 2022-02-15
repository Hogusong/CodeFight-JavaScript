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
  let result = -Number.MAX_VALUE;
  
  const getMaxSum = (node) => {
      if (!node) return 0;
      const top = node.val;
      const left = getMaxSum(node.left);
      const right = getMaxSum(node.right);
      const maxPathSum = Math.max(top, top + left, top + right);
      
      result = Math.max(result, maxPathSum, top + left + right);
      return maxPathSum;
  }
  
  getMaxSum(root);
  return result;
};
