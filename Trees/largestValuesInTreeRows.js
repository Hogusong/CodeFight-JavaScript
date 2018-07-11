// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function largestValuesInTreeRows(t) {
  if (!t) return []
  
  let answer = []
  let arr = [t]
  while (arr.length > 0) {
    const values = []
    const nodes = []
    for (let node of arr) {
      values.push(node.value)
      if (node.left) nodes.push(node.left)
      if (node.right) nodes.push(node.right)
    }
    answer.push(Math.max.apply(null, values))
    arr = nodes.slice()
  }
  return answer 
}
