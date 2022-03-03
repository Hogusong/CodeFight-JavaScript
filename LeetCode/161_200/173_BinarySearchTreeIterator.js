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
  this.root = root;
  this.nodes = [];
  const helper = (node) => {
      if (!node) return;
      helper(node.left);
      this.nodes.push(node);
      helper(node.right);
  }
  
  helper(this.root);
  this.nextNode = this.nodes[0];
};

/**
* @return {number}
*/
BSTIterator.prototype.next = function() {
  const value = this.nextNode.val;
  const index = this.nodes.findIndex(node => node === this.nextNode)
  this.nextNode = this.nodes[index+1];
  return value;
};

/**
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
  return this.nextNode !== undefined;
};

/** 
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/