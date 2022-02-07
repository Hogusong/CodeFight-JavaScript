/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(L1, L2) {
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
  if (L1) curr.next = L1;
  else curr.next = L2;
  return root.next;
};