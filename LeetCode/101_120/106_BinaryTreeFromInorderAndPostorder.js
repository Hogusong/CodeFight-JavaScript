/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
  const last = postorder.length - 1;
  if (last < 0) return null;
  const node = new TreeNode(postorder[last]);
  if (last == 0) return node;
  const i = inorder.indexOf(postorder[last]);
  node.left = buildTree(inorder.slice(0, i+1), postorder.slice(0,i));
  node.right = buildTree(inorder.slice(i+1), postorder.slice(i, last));
  return node;
};