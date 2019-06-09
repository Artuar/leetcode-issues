// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
  let result;
  let next;
  let l1 = list1;
  let l2 = list2;
  const add = (num) => {
    if (result === undefined) {
      result = {val: num};
      next = result;
    } else {
      next.next = {val: num};
      next = next.next;
    }
  };
  while (l1 !== null || l2 !== null) {
    if (l2 === null) {
      add(l1.val);
      l1 = l1.next;
    } else if (l1 === null) {
      add(l2.val);
      l2 = l2.next;
    } else {
      if (l1.val < l2.val) {
        add(l1.val);
        l1 = l1.next;
      } else if (l2.val < l1.val) {
        add(l2.val);
        l2 = l2.next;
      } else {
        add(l1.val);
        l1 = l1.next;
        add(l2.val);
        l2 = l2.next;
      }
    }
  }
  return result || null;
};
