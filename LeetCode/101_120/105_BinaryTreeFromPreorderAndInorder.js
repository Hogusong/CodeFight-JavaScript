/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  if (preorder.length < 1) return null;
  const node = new TreeNode(preorder[0])
  if (preorder.length == 1 && inorder.length == 1) return node;
  const index = inorder.indexOf(preorder[0]);
  node.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index));
  node.right = buildTree(preorder.slice(index+1), inorder.slice(index+1));
  return node;
}