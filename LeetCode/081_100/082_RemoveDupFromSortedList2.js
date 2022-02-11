/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  const root = new ListNode();
  root.next = head;
  let prev = root, curr = head;
  while (curr && curr.next) {
      if (curr.val == curr.next.val) {
          while (curr.next && curr.val == curr.next.val) curr = curr.next;
          curr = curr.next;
          prev.next = curr;
      } else {
          prev.next = curr
          prev = prev.next;
          curr = curr.next;
      }
  }
  return root.next;
};