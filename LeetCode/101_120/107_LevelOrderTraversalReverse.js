/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrderBottom = function(root) {
  const result = [];
  if (!root) return result;
  let nodes = [root];
  while (nodes.length > 0) {
      const temp = nodes;
      nodes = [];
      const values = [];
      for (let node of temp) {
          values.push(node.val);
          if (node.left) nodes.push(node.left);
          if (node.right) nodes.push(node.right);
      }
      result.push(values);
  }
  return result.reverse();
};