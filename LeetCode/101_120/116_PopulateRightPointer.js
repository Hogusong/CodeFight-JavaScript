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

// Using Recursion.  It was guaranteed that all nodes have left and right.
var connect = function(root) {
  if (!root) return root;

  if (root.left) root.left.next = root.right;
  if (root.right && root.next) root.right.next = root.next.left;

  connect(root.right);
  connect(root.left);

  return root;
}

// Standard solution: Not guaranteed that all nodes have left and right.
var connect = function(root) {
  if (!root) return root;

  if (root.left) root.left.next = root.right ? root.right : findNext(root.next);
  if (root.right) root.right.next = findNext(root.next);

  connect(root.right);
  connect(root.left);

  return root;
}

function findNext(node) {
    if (!node) return null;
    if (node.left) return node.left;
    if (node.right) return node.right;
    return findNext(node.next);
}