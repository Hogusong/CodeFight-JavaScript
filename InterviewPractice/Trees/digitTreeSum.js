// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function digitTreeSum(t) {
  if (!t) return 0
  if (!t.left && !t.right) return t.value;
  
  var result = []
  let ans = String(t.value);
  if (t.left) getSum(t.left, ans);
  if (t.right) getSum(t.right, ans);
  let sum = 0
  for (let v of result) {
    sum += parseInt(v)
  }

  function getSum(node, ans) {
    ans += node.value;
    if (!node.left && !node.right) {
      result.push(ans)  
      return
    }
    if (node.left) getSum(node.left, ans);
    if (node.right) getSum(node.right, ans);
  }
  
  return sum
}
