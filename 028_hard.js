// 25. Reverse Nodes in k-Group
// https://leetcode.com/problems/reverse-nodes-in-k-group/

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
    let firstNode;
    let step = 0;
    
    if (!head) {
     return head;
    }
    
    const find = (previous, current) => {
        step++;
        const revert = { val: current.val, next: previous }
        if (previous === null) {
            firstNode = revert;
        }
        if (step === k || !current.next) {
            console.log(step, k);
            const res = {revert, other: current.next, firstNode, isAll: step===k}
            step = 0;
            firstNode = undefined;
            return res;
        }
        return find(revert, current.next);
    }
    
    let stepNode;
    let result;
    let currenrOther;
    const findGroup = (cur) => {
        const { revert, other, firstNode, isAll} = find(null, cur);
        // 2,1    3,4,5
        
        if (!isAll && !result) {
            return cur;
        }
            
            
        if (stepNode) {
            stepNode.next = revert;
        }
        if (!result) {
            result = revert;
        }
        if (!other) {
            if (!isAll && stepNode) {
              stepNode.next = currenrOther;  
            } 
            return result;
        }
        
        currenrOther = other;
        
        stepNode = firstNode;
        
        return findGroup(other)
    }
    
    return findGroup(head);
};