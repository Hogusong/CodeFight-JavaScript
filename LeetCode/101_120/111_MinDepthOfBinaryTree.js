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
// Using Recursion: It takes more time than using ARRAY. Because it should travel to the end node.
var minDepth = function(root) {
    if (!root) return 0;
    return findMinDepth(root, 1);
}

function findMinDepth(node, height) {
    if (!node.left && !node.right) return height;
    height++;
    if (!node.left) return findMinDepth(node.right, height);
    if (!node.right) return findMinDepth(node.left, height);
    return Math.min(findMinDepth(node.right, height), findMinDepth(node.left, height));
}

// Using ARRAY
var minDepth = function(root) {
  if (!root) return 0;
  let height = 0, index = 0;
  const nodes = [[root]];
  while (index < nodes.length) {
      height++;
      const arr = [];
      for (let node of nodes[index++]) {
          if (!node.left && !node.right) return height;
          if (node.left) arr.push(node.left);
          if (node.right) arr.push(node.right);
      }
      if (arr.length > 0) nodes.push(arr);
  }
  return height;
}

var minDepth = function(root) {
    if (!root) return 0
    let nodes = [root]
    let depth = 1
    while (nodes.length > 0) {
        const temp = nodes
        nodes = []
        for (let node of temp) {
            if (!node.left && !node.right) return depth
            if (node.left) nodes.push(node.left)
            if (node.right) nodes.push(node.right)
        }
        depth++
    }
};