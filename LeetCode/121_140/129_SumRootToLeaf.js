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
 var sumNumbers = function(root) {
  if (!root.left && !root.right) return root.val;
  const result = [];
  
  const travel = (node, ans) => {
      ans += node.val;
      if (!node.left && !node.right) {
          result.push(ans);
          return;
      }
      if (node.left) travel(node.left, ans);
      if (node.right) travel(node.right, ans);
  } 
  
  travel(root, '');
  let sum = 0;
  for (let n of result) sum += +n;
  return sum;
}

// More simple than above.
var sumNumbers = function(root) {
  if (!root.left && !root.right) return root.val;
  let sum = 0;
  
  const travel = (node, ans) => {
      ans = ans * 10 + node.val;
      if (!node.left && !node.right) {
          sum += ans;
          return;
      }
      if (node.left) travel(node.left, ans);
      if (node.right) travel(node.right, ans);
  } 
  
  travel(root, 0);
  return sum;
}