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
var maxDepth = function(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth = function(root) {
  let maxD = 0;

  const searchDepth = (node, count) => {
    if (!node) {
      maxD = Math.max(maxD, count);
      return 
    }
    count ++;
    searchDepth(node.left, count);
    searchDepth(node.right, count);
  };
  
  searchDepth(root, 0);
  return maxD;
}