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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const res = [];
  
  const dfs = (node, arr) => {
      if (!node.left && !node.right) {
          arr.push(node.val)
          res.push(arr.join('->'));
          return;
      }
      if (node.left) dfs(node.left, [...arr, node.val])
      if (node.right) dfs(node.right, [...arr, node.val])
  }
  
  dfs(root, []);
  return res;
};