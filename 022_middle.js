// https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/

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
  let findLink = head;
  const remove = (list, n, pos) => {
    if (list === null) {
      if (pos === n) {
        return head.next;
      }
      findLink.next = findLink.next.next;
      return head;
    } else {
      if (pos > n) {
        findLink = findLink.next;
      }
      return remove(list.next, n, ++pos);
    }
  };
  return remove(head, n, 0);
};
