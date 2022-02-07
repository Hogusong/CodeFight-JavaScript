/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
  if (!head || !head.next) return head;
  const root = new ListNode();
  root.next = head;
  let prev = root;
  while (true) {
      let count = 1;
      let kthNode = prev.next;
      while (count < k && kthNode) {
          kthNode = kthNode.next;
          count++;
      }
      if (!kthNode) break;
      let curr = prev.next;
      while (count > 1) {
          let temp = curr.next ? curr.next.next : null;
          if (curr.next) curr.next.next = prev.next;
          prev.next = curr.next;
          curr.next = temp;
          count--;
      }
      prev = curr;
  }
  return root.next;
}

function printNodes(node) {
  while (node) {
      console.log(node.val + ', ');
      node = node.next;
  }
  console.log();
}
