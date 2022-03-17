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
 * @return {number[]}
 */
 var rightSideView = function(root) {
  if (!root) return [];
  const nums = [];
  let nodes = [root];
  while (nodes.length > 0) {
      nums.push(nodes.at(-1).val);
      const temp = nodes;
      nodes = [];
      for (let node of temp) {
          if (node.left) nodes.push(node.left);
          if (node.right) nodes.push(node.right);
      }
  }
  return nums;
};

// Handle with next index instead of using 2 arrays.
var rightSideView = function(root) {
    if (!root) return [];
    const nums = [];
    const queue = [root];
    let nextIndex = 0;
    while (queue.length > nextIndex) {
        const qLen = queue.length;
        nums.push(queue.at(-1).val);
        for (let i = nextIndex; i < qLen; i++) {
            rightNode = queue[nextIndex++];
            if (rightNode.left) queue.push(rightNode.left);
            if (rightNode.right) queue.push(rightNode.right);
        }
    }
    return nums;
};