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
var isValidBST = function(root) {
  const isValid = (node, lower, upper) => {
    if (!node) return true;
    if (lower && node.val <= lower.val) return false;
    if (upper && node.val >= upper.val) return false;
    return isValid(node.left, lower, node) && isValid(node.right, node, upper);
  }   
  return isValid(root, null, null);
}

// Using Array(stack)
var isValidBST = function(root) {
  if (!root) return true;
  stack = [root];
  let last = null;
  while (stack.length > 0) {
    let curr = stack.at(-1);  // The last element of stack is assigned to curr. 
    if (curr.left) {
      stack.push(curr.left);
      curr.left = null;
    } else {
      stack.pop();
      if (last != null && last >= curr.val) return false;
      last = curr.val;
      if (curr.right) stack.push(curr.right)
    }
  }
  return true;
}