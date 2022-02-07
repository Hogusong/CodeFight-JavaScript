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
 var swapPairs = function(head) {
  if (!head || !head.next) return head;
  const root = new ListNode();
  let prev = root, curr = head;
  while (curr && curr.next) {
      const nextNode = curr.next.next
      prev.next = curr.next
      prev.next.next = curr
      curr.next = nextNode
      prev = curr
      curr = nextNode
  }
  return root.next;
}
