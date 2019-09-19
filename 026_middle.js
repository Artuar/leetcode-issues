// 24. Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/

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
    let result = null;
    let cur = null;
    const add = (obj) => {
        if (!result) {
          result = obj;
          cur = result;
        } else {
          cur.next = obj;
          cur = cur.next;
        }
    };
    let current = head;
    while (current !== null) {
         const first = current ? current.val : null;
         current = current.next; 
         if (current !== null) {
             const second = current ? current.val : null;
             add({val: second })
             add({val: first })
             current = current.next; 
         } else {
            add({val: first }) 
         }
    }
    return result;
};