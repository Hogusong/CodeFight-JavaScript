/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let nodes = [root];
  while (nodes.length > 0) {
      if (!checkSymmetric(nodes)) return false;
      const temp = nodes;
      nodes = [];
      const len = temp.length;
      for (let node of temp) {
          if (node) {
              nodes.push(node.left);
              nodes.push(node.right);
          }
      }
  }
  return true;
}

function checkSymmetric(nodes) {
  const end = nodes.length - 1
  for (let i = 0; i <= end / 2; i++) {
      if ((!nodes[i] && nodes[end-i]) || (nodes[i] && !nodes[end-i])) return false;
      if (!nodes[i] && !nodes[end-i]) continue;
      if (nodes[i].val != nodes[end-i].val) return false;
  }
  return true;
}

// Using Recursion.
var isSymmetric = function(root) {
  return symmetric(root.left, root.right)
};

function symmetric(L, R) {
  if (!L && !R) return true
  if ((!L && R) || (L && !R)) return false
  if (L.val != R.val) return false
  return symmetric(L.left, R.right) && symmetric(L.right, R.left)
}