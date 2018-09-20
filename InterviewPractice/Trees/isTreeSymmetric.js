// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function isTreeSymmetric(t) {
  if (!t) return true;
  if (!t.left && !t.right) return true;
  if (!t.left || !t.right) return false;
  
  const c_nodes = [t.left, t.right];
  return checkSymmetric(c_nodes)
}

function checkSymmetric(nodes) {
  const l = nodes.length
  for (let i=0; i < l/2; i++) {
    if (!nodes[i] && !nodes[l-i-1]) continue;
    if ((!nodes[i] && nodes[l-i-1]) || (nodes[i] && !nodes[l-i-1])) return false
    if (nodes[i].value !== nodes[nodes.length-i-1].value) return false;
  }  
  
  const c_nodes = []
  let next = false;
  for (let i=0; i<nodes.length; i++) {
    if (!nodes[i]) c_nodes.push(null, null);
    else {
      c_nodes.push(nodes[i].left, nodes[i].right);
      next = true;
    }
  }
  return (next) ? checkSymmetric(c_nodes) : true ;
}
