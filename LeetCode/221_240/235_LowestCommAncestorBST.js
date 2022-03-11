/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  
  const dfs = (node) => {
      if (p.val < node.val && node.val > q.val) return dfs(node.left);
      if (p.val > node.val && node.val < q.val) return dfs(node.right);
      return node;
  }
  
  return dfs(root);
};

var lowestCommonAncestor = function(root, p, q) {
  let curr = root;
  while (curr) {
      if (p.val > curr.val && q.val > curr.val) curr = curr.right;
      else if (p.val < curr.val && q.val < curr.val) curr = curr.left;
      else return curr;
  }
};