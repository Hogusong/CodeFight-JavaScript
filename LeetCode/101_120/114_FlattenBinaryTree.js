/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
  if (!root) return null
  const result = []
  const traversal = (node) => {
      if (!node) return 
      result.push(node)
      traversal(node.left)
      traversal(node.right)
  }
  
  traversal(root)
  for (let i = 1; i < result.length; i++) {
    nodes[i-1].left = null;
    nodes[i-1].right = nodes[i];
  }
};

// Using Recursion
var flatten = function(root) {
  if (!root) return null;

  let left = root.left;
  let right = root.right;

  root.left = null;
  flatten(left);
  root.right = left;
  
  flatten(right);
  let curr = root;
  while (curr.right) curr = curr.right
  curr.right = right;
}