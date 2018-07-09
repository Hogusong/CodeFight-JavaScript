// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function reverseNodesInKGroups(l, k) {
  let current = l;
  let list = [];
  let ans = [];
  while (current) {
    for (let i=0; i<k; i++) {
      list.push(current.value);
      current = current.next;
      if (!current) break;
    }
    if (list.length < k) {
      ans = ans.concat(list)
    } else {
      ans = ans.concat(list.reverse())
    }
    list = []
  }
  return ans;
}
