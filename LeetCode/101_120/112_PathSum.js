/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
 var hasPathSum = function(root, sum) {
  if (!root) return false;
  const findSum = (node, subSum) => {
      subSum += node.val;
      if (!node.left && !node.right) return subSum == sum;
      if (!node.left) return findSum(node.right, subSum);
      if (!node.right) return findSum(node.left, subSum);
      return findSum(node.right, subSum) || findSum(node.left, subSum);
  }
  return findSum(root, 0);
};

// Using ARRAY and DICTIONARY: faster than using Recursion.
var hasPathSum = function(root, sum) {
  if (!root) return false;
  let nodes = [{'node': root, 'sum': root.val}];
  while (nodes.length > 0) {
      const temp = nodes;
      nodes = []
      for (let obj of temp) {
          const node = obj.node;
          if (!node.left && !node.right && obj.sum == sum) return true;
          if (node.left) nodes.push({'node': node.left, 'sum': obj.sum + node.left.val});
          if (node.right) nodes.push({'node': node.right, 'sum': obj.sum + node.right.val});
      }
  }
  return false;
};