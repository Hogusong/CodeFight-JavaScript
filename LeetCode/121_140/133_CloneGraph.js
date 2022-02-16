/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const wMap = new WeakMap();
  
  const cloneNode = (node) => {
      if (!node) return null;
      let newNode = new Node(node.val, []);
      if (!wMap.get(node)) wMap.set(node, newNode);
      for (let n of node.neighbors) {
          if (wMap.get(n)) newNode.neighbors.push(wMap.get(n));
          else {
              let temp = cloneNode(n);
              newNode.neighbors.push(temp);
          }
      }
      return newNode;
  }
  return cloneNode(node);
}