/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  if (lists.length < 1) return null;
  if (lists.length < 2) return lists[0];
  return mergeRec(lists, 0, lists.length - 1);
}

function mergeRec(lists, from, to) {
  if (from >= to) return lists[from];
  const mid = Math.floor((from + to) / 2);
  const left = mergeRec(lists, from, mid);
  const right = mergeRec(lists, mid + 1, to);
  return mergeLists(left, right);
}

function mergeLists(L1, L2) {
  const root = new ListNode();
  let curr = root;
  while (L1 && L2) {
      if (L1.val < L2.val) {
          curr.next = L1;
          L1 = L1.next;
      } else {
          curr.next = L2;
          L2 = L2.next;
      }
      curr = curr.next;
  }
  curr.next = L1 ? L1 : L2;
  return root.next;
}