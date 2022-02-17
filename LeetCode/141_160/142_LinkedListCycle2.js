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
 var detectCycle = function(head) {
  const map = new WeakMap();
  while (head) {
      if (map.get(head)) return map.get(head);
      map.set(head, head);
      head = head.next;
  }
  return null;
};

var detectCycle = function(head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) return head;
    set.add(head);
    head = head.next
  }
  return null;    
};