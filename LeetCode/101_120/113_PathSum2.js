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
 * @return {number[][]}
 */
// Using Array and Dictionary
var pathSum = function(root, sum) {
  if (!root) return [];
  const result = [];
  let nodes = [{'node': root, 'sum': root.val, 'values': [root.val]}];
  while (nodes.length > 0) {
    const temp = nodes;
    nodes = [];
    for (let obj of temp) {
      const LN = obj.node.left;
      const RN = obj.node.right;
      if (!LN && !RN && obj.sum == sum) result.push(obj.values);
      if (LN) nodes.push({'node': LN, 'sum': obj.sum + LN.val, 'values': [...obj.values, LN.val]});
      if (RN) nodes.push({'node': RN, 'sum': obj.sum + RN.val, 'values': [...obj.values, RN.val]});
    }
  }
  return result;
}

// Using Recursion
var pathSum = function(root, sum) {
  if (!root) return [];
  const result = [];
  
  const getPathSum = (node, sum, values) => {
      if (!node.left && !node.right) {
          if (sum == 0) result.push(values);
          return;
      }
      if (node.left) 
          getPathSum(node.left, sum - node.left.val, [...values, node.left.val]);
      if (node.right) 
          getPathSum(node.right, sum - node.right.val, [...values, node.right.val]);
  }

  getPathSum(root, sum - root.val, [root.val]);
  return result;
}