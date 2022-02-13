/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 var sortedListToBST = function(head) {
  if (!head) return null;
  if (!head.next) return new TreeNode(head.val);
  
  let curr = head, prev = null, jump = head;
  while (jump && jump.next) {
      prev = curr;
      curr = curr.next;
      jump = jump.next.next
  }
  const node = new TreeNode(curr.val);
  if (!prev) {
      node.right = new TreeNode(curr.next.val);   
  } else {
      prev.next = null
      const nextNode = curr.next;
      curr.next = null
      node.left = sortedListToBST(head);
      node.right = sortedListToBST(nextNode);
  }
  return node;
}

// Store all values of ListNodes in an array and build BST with the array.
var sortedListToBST = function(head) {
  if (!head) return null;
  const nums = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  return buildBST(nums, 0, nums.length-1);
}

function buildBST(N, from, to) {
  if (from > to) return null;
  if (from === to) return new TreeNode(N[from]);

  const mid = Math.floor((from + to + 1) / 2);
  const node = new TreeNode(N[mid]);
  node.left = buildBST(N, from, mid-1);
  node.right = buildBST(N, mid+1, to);
  return node;
}