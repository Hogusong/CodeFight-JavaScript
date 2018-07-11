// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function traverseTree(t) {
  var answer = []
  if (!t) return answer
  if (!t.left && !t.right) return [t.value]
  var arr = [t]
  while (true) {
    const nodes = []
    for (let node of arr) {
      answer.push(node.value);
      if (node.left)  nodes.push(node.left);
      if (node.right) nodes.push(node.right);
    }
    if (nodes.length < 1) break
    arr = nodes.slice();
  }
  return answer
}
