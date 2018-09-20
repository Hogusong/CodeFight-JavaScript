// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
  let current = l;
  let root = current;
  let previous = null;
  
  while (current !== null) {
    if (current.value === k) {
      if (previous === null) {
        root = current.next
      } else {
        previous.next = current.next
      }
    } else {
      previous = current
    }
    current = current.next
  }
  return root;
}
