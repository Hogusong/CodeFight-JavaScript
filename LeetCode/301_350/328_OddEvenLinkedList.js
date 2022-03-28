/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head || !head.next || !head.next.next) return head;
  let prev = head, curr = head.next;
  while (curr && curr.next) {
      const temp = prev.next;
      prev.next = curr.next;
      curr.next = curr.next.next;
      prev.next.next = temp;
      curr = curr.next;
      prev = prev.next;
  }
  return head;
};