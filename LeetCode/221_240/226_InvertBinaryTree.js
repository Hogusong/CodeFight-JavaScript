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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  let nodes = [root], level = 0;
  while (nodes.length > 0) {
      const temp = nodes;
      nodes = [];
      for (let node of temp) {
          if (!node) continue;
          if (level % 2 === 1) {
              nodes.push(node.left);
              nodes.push(node.right);
          } else {
              nodes.push(node.right);
              nodes.push(node.left);
          }
      }
      let index = 0
      for (let i = 0; i < temp.length; i++) {
          const node = temp[i];
          if (!node) continue;
          const j = index * 2;
          node.left = nodes[j];
          node.right = nodes[j+1];
          index++;
      }
  }
  return root;
};

var invertTree = function(root) {
    if (!root) return null;
    const node = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(node);
    return root;
};