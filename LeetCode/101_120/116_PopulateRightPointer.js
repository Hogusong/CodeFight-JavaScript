/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return root;
  let nodes = [root];
  while (nodes.length > 0) {
      const temp = nodes;
      nodes = [];
      for (let i = 0; i < temp.length; i++) {
          if (i < temp.length - 1) temp[i].next = temp[i+1];
          if (temp[i].left) nodes.push(temp[i].left);
          if (temp[i].right) nodes.push(temp[i].right);
      }
  }
  return root;
}

// Using Recursion
var connect = function(root) {
  if (!root) return root;

  if (root.left) root.left.next = root.right;
  if (root.right && root.next) root.right.next = root.next.left;

  connect(root.left);
  connect(root.right);

  return root;
}
