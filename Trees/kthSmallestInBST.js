// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function kthSmallestInBST(t, k) {
  if (!t) return null;
  var count = 0;
  var smallest = null;
  findKthSmallest(t, k)
  return (count === k) ? smallest : null ;
  
  function findKthSmallest(t, k) {
    if (!t.left && !t.right) {
      updateSmallest(t)
      return;
    }
    
    if (t.left)  findKthSmallest(t.left, k) ;
    if (count === k) return;
    updateSmallest(t)
    if (count === k) return;    
    
    if (t.right) findKthSmallest(t.right, k)    
  }
  
  function updateSmallest(t) {
    count ++;
    smallest = t.value;    
  }
}
