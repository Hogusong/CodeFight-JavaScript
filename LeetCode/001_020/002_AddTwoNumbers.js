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
 var addTwoNumbers = function(l1, l2) {
  let up = 0
  const root = new ListNode(0);
  let curr = root;
  while (l1 || l2) {
      let n = up;
      if (l1) {
          n += l1.val;
          l1 = l1.next;
      }
      if (l2) {
          n += l2.val;
          l2 = l2.next;
      }
      up = Math.floor(n / 10);
      curr.next = new ListNode(n % 10);
      curr = curr.next;
  }
  if (up > 0) curr.next = new ListNode(up);
  return root.next;
};