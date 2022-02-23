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
// Using Recursion to check all children's balance.
var isBalanced = function(root) {
  if (!root) return true;
  const leftH = getHeight(root.left, 0);
  const rightH = getHeight(root.right, 0);
  if (Math.abs(leftH - rightH) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(node, height) {
  if (!node) return height;
  height++;
  if (!node.left && !node.right) return height;
  const lH = getHeight(node.left, height);
  const rH = getHeight(node.right, height);
  return Math.max(lH, rH);
}

// Without using 'height' parameter.
var isBalanced = function(root) {
  if (!root || (!root.left && !root.right)) return true
  const nodes = [[root.left, root.right]]
  let index = 0;
  while (index < nodes.length) {
      const temp = nodes[index++];
      const LH = getMaxHeight(temp[0])
      const RH = getMaxHeight(temp[1])
      if (Math.abs(LH - RH) > 1) return false
      if (temp[0]) nodes.push([temp[0].left, temp[0].right])
      if (temp[1]) nodes.push([temp[1].left, temp[1].right])
  }
  return true
}

function getMaxHeight(node) {
  if (!node) return 0;
  if (!node.left && !node.right) return 1;
  const lH = getMaxHeight(node.left);
  const rH = getMaxHeight(node.right);
  return 1 + Math.max(lH, rH);
}

// Using Queue to compare heights of all child nodes.
var isBalanced = function(root) {
  if (!root || (!root.left && !root.right)) return true
  const queue = [[root.left, root.right]]
  while (queue.length > 0) {
      const temp = queue.shift()
      const LH = getHeight(temp[0], 0)
      const RH = getHeight(temp[1], 0)
      if (Math.abs(LH - RH) > 1) return false
      if (temp[0]) queue.push([temp[0].left, temp[0].right])
      if (temp[1]) queue.push([temp[1].left, temp[1].right])
  }
  
  return true
};

// Using Array and incresing INDEX to compare heights of all child nodes.
var isBalanced = function(root) {
  if (!root || (!root.left && !root.right)) return true
  const nodes = [[root.left, root.right]]
  let index = 0;
  while (index < nodes.length) {
      const temp = nodes[index++];
      const LH = getHeight(temp[0], 0)
      const RH = getHeight(temp[1], 0)
      if (Math.abs(LH - RH) > 1) return false
      if (temp[0]) nodes.push([temp[0].left, temp[0].right])
      if (temp[1]) nodes.push([temp[1].left, temp[1].right])
  }
  return true
}