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
var insertionSortList = function(head) {
  const root = new ListNode(0);
  root.next = head;
  let curr = root.next, node, prev;
  while (curr) {
      while (curr && curr.next && curr.val <= curr.next.val) curr = curr.next;
      if (!curr.next) break;

      node = curr.next;
      curr.next = curr.next.next;
      
      prev = root;
      while (prev.next.val < node.val) prev = prev.next;
      const temp = prev.next;
      prev.next = node;
      node.next = temp;
  }
  return root.next;
};

var insertionSortList = function(head) {
  if (!head || !head.next) return head;

  let node = head;
  while (node) {
    if (node.next && node.val > node.next.val) {
      const temp = node.next;
      node.next = node.next.next;
      let curr = head;
      let prev = null;
      while (curr.val <= temp.val) {
        prev = curr;
        curr = curr.next;
      }
      temp.next = curr;
      if (prev === null) head = temp
      else prev.next = temp
    } else {
      node = node.next;
    }
  }
  return head;  
};