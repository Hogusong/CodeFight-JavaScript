/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head || !head.next) return head;
  const frontRoot = new ListNode(), backRoot = new ListNode();
  let frontTail = frontRoot, backTail = backRoot, curr = head;
  while (curr) {
      if (curr.val < x) {
          frontTail.next = curr;
          frontTail = frontTail.next;
      } else {
          backTail.next = curr;
          backTail = backTail.next;
      }
      curr = curr.next;
  }
  backTail.next = null;
  frontTail.next = backRoot.next;
  return frontRoot.next;
};