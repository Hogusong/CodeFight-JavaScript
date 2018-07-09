// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function rearrangeLastN(l, n) {
  const list = [];
  let current = l;
  while (current) {
    list.push(current.value);
    current = current.next;
  }
  const ans = list.slice(list.length-n).concat(list.slice(0,list.length-n))
  return ans
}
