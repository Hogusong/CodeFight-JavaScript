/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  if (!head.next) return null;
  let nthNode = head;
  while (n > 0) {
      nthNode = nthNode.next;
      n--;
  }
  let root = new ListNode();
  root.next = head;
  let curr = root;
  while (nthNode) {
      curr = curr.next;
      nthNode = nthNode.next;
  }
  curr.next = curr.next.next;
  return root.next;
};