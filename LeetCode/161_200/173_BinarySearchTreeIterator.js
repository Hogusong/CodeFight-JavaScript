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
 */
 var BSTIterator = function(root) {
  this.stack = [];
  let curr = root;
  while (curr) {
      this.stack.push(curr);
      curr = curr.left
  }
};

/**
* @return {number}
*/
BSTIterator.prototype.next = function() {
  let curr = this.stack.pop()
  const ans = curr.val;
  if (curr.right) {
      curr = curr.right;
      while (curr) {
          this.stack.push(curr);
          curr = curr.left;
      }
  }
  return ans;
};

/**
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};

/** 
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/