/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
 var reverseBetween = function(head, m, n) {
  if (m == n) return head;
  const root = new ListNode();
  root.next = head;
  let curr = head, prev = root;
  let count = 1;
  while (count < m) {
      prev = curr;
      curr = curr.next;
      count++;
  }
  while (count < n) {
      const temp = curr.next.next;
      curr.next.next = prev.next;
      prev.next = curr.next;
      curr.next = temp;
      count++;
  }
  return root.next;
}
