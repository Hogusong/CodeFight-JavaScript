/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {
  if (n == 1) return [new TreeNode(1)];
  
  const buildTrees = (s, e) => {
      if (s > e) return [null];
      if (s == e) return [new TreeNode(s)];
      const result = [];
      for (let i = s; i <= e; i++) {
          const leftNodes = buildTrees(s, i-1);
          const rightNodes = buildTrees(i+1, e);
          for (let left of leftNodes) {
              for (let right of rightNodes) {
                  const curr = new TreeNode(i);
                  curr.left = left;
                  curr.right = right;
                  result.push(curr);
              }
          }
      }
      return result;
  }
  
  return buildTrees(1, n);
}
