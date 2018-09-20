// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function mergeTwoLinkedLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let root, current, current1, current2;
  if (l1.value <= l2.value) {
    root = l1;
    current1 = l1.next;
    current2 = l2;
  } else {
    root = l2;
    current1 = l1;
    current2 = l2.next;
  }
  current = root;
  while ( current1 && current2) {
    if (current1.value <= current2.value) {
      current.next = current1
      current1 = current1.next
    } else {
      current.next = current2
      current2 = current2.next      
    }
    current = current.next
  }
  current.next = (current1) ? current1 : current2;
  return root;
}
