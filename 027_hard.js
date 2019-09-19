// 23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null
    }
    
    let curPosOfList = null;
    let newList = null;
    const addToList = (item) => {
        const node = { val: item, next: null };
        if (curPosOfList !== null) {
            curPosOfList.next = node;
            curPosOfList = curPosOfList.next;
            return node;
        } 
        curPosOfList = node;
        newList = curPosOfList
        return curPosOfList;
    }
    
    let currentState = lists;
    while (currentState.length) {
        const nextState = [];
    
        let curMinNum = null;
        for (let i = 0; i < currentState.length; i++) {
            let list = currentState[i];
            if (list === null) continue;
            const num = currentState[i].val; 
            if (curMinNum === null || num < curMinNum) {
                curMinNum = num;
            }
        }
        for (let j = 0; j < currentState.length; j++) {
            let list = currentState[j];
            if (list === null) continue;
            const num = list.val; 
            if (num === curMinNum) {
                addToList(num);
                list = list.next;
            }
            if (list !== null) {
                nextState.push(list);
            }
        }
        currentState = nextState;
    }
    return newList;
};