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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// Using inorder travelsor to find two wrong positions.
var recoverTree = function (root) {
  let nodes = [], first = null, last = null;

  const travelsor = (node) => {
      if (!node) return;
      travelsor(node.left);
      if (nodes.length > 0) {
          if (nodes.at(-1).val >= node.val) {
              last = node
              if (!first) first = nodes.at(-1);
              else return;
          }
      }
      nodes.push(node);
      travelsor(node.right);
  }

  travelsor(root);
  const temp = first.val
  first.val = last.val
  last.val = temp
  return root
}

var recoverTree = function (root) {
  let [first, last, previous] = [null, null, null]

  const findSegments = node => {
    if (!node) return node
    findSegments(node.left)
    if (previous) {
      if (previous.val > node.val) {
        if (!first) first = previous
        last = node
      }
    }
    previous = node
    findSegments(node.right)
  }

  findSegments(root)
  const temp = first.val
  first.val = last.val
  last.val = temp
  return root
}
