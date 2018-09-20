// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function restoreBinaryTree(inorder, preorder) {
  if (inorder.length < 2) return new Tree(inorder[0]);
  
  const root = new Tree(preorder[0]);
  const r_value = preorder[0];
  const index = inorder.indexOf(r_value);
  
  const l_in = inorder.slice(0, index);
  const l_pre = preorder.slice(1, index);
  if (l_in.length > 0) root.left = restoreBinaryTree(l_in, l_pre);
  
  const r_in = inorder.slice(index+1);
  const r_pre = preorder.slice(index+1);
  if (r_in.length > 0) root.right = restoreBinaryTree(r_in, r_pre);
  
  return root;
}
