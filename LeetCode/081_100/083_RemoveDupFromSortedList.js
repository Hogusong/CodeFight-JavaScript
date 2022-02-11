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
  let curr = head;
  while (curr) {
      if (curr.next && curr.val == curr.next.val) 
          curr.next = curr.next.next
      else curr = curr.next
  }
  return head;
};

var deleteDuplicates2 = function(head) {
  if (!head || !head.next) return head;
  let curr = head;
  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else curr = curr.next;
  }
  return head;    
};