/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
  if (!root) return [];
  const result = [];
  let nodes = [root], level = 0;
  while (nodes.length > 0) {
      const temp = nodes;
      nodes = [];
      const values = []
      const last = temp.length - 1;
      for (let i = 0; i <= last; i++) {
          if (level % 2 == 0) values.push(temp[i].val);
          else values.push(temp[last - i].val);
          if (temp[i].left) nodes.push(temp[i].left);
          if (temp[i].right) nodes.push(temp[i].right);
      }
      result.push(values);
      level++;
  }
  return result;
};