// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function isListPalindrome(l) {
  const L = []
  let current = l;
  while (current) {
    L.push(current.value)
    current = current.next
  }
  for (let i=0; i<L.length/2; i++) {
    if (L[i] !== L[L.length-1-i]) return false
  }
  return true
}
