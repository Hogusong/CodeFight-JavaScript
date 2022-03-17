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
// Use extra memory.
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

// No need extra memory.
var partition = function(head, x) {
    if (!head || !head.next) return head;
    const root = new ListNode(0);
    let prev = root, backHead = head;
    while (backHead && backHead.val < x) {
        prev.next = backHead;
        prev = prev.next;
        backHead = backHead.next;
    }
    console.log([prev, backHead])
    if (!backHead) return head;
    let curr = backHead;
    while (curr && curr.next) {
        if (curr.next.val < x) {
            prev.next = curr.next;
            prev = prev.next;
            curr.next = curr.next.next
        } else curr = curr.next;
    }
    prev.next = backHead;
    return root.next;
};