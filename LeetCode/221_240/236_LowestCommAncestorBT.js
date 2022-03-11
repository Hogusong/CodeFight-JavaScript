/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
  const findNode = (node, t) => {
      if (!node) return false;
      if (node.val === t.val) return true;
      return findNode(node.left, t) || findNode(node.right, t);
  }
  
  const dfs = (node) => {
      if (node.val === p.val || node.val === q.val) return node;
      if (findNode(node.left, p)) {
          if (findNode(node.left, q)) return dfs(node.left);
          else return node;
      } else {
          if (findNode(node.right, q)) return dfs(node.right);
          else return node;
      }
  }

  return dfs(root);
};

// Faster than above because of using Dictionary.
var lowestCommonAncestor = function(root, p, q) {
  const dict = {}
  
  const findNode = (node, t) => {
      if (!node) return false;
      if (node.val === t.val) return true;
      const key = node.val + ',' + t.val;
      if (dict.hasOwnProperty(key)) return dict[key];
      dict[key] = findNode(node.left, t) || findNode(node.right, t);
      return dict[key];
  }
  
  const dfs = (node) => {
      if (node.val === p.val || node.val === q.val) return node;
      if (findNode(node.left, p)) {
          if (findNode(node.left, q)) return dfs(node.left);
          else return node;
      } else {
          if (findNode(node.right, q)) return dfs(node.right);
          else return node;
      }
  }
  
  return dfs(root);
};

var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  if (root.val === p.val || root.val === q.val) return root;
  if (!root.left && !root.right) return null;
  
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  
  if (right && left) return root;
  return left ? left : right;
};