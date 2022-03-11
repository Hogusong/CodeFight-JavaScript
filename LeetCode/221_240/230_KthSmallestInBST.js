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
 * @param {number} k
 * @return {number}
 */
// This logic travels to the last element and then return the Kth element. No extra memory.
var kthSmallest = function(root, k) {
  const output = [];
  
  const dfs = (node) => {
      if (!node) return;
      dfs(node.left);
      output.push(node.val);
      dfs(node.right);
  }
  
  dfs(root);
  return output[k-1];
};

// Stop at the Kth element. Need extra memory.
var kthSmallest = function(root, k) {
  const stack = []; 
  let curr = root;
  
  while (curr || stack.length > 0) {
      while (curr) {
          stack.push(curr);
          curr = curr.left
      }
      curr = stack.pop();
      k--;
      if (k === 0) return curr.val;
      curr = curr.right;
  }
};