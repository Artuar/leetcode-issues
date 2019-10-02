// 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // recursion
var searchRange = function(nums, target, shift = 0, result = [-1, -1]) {
        
    const first = nums[shift];
    const end = nums.length - shift;
    const last = nums[end];
    const [b, e] = result;
    
    if (b !== -1 && e !== -1) {
        return result;
    }
    
    if (b === -1 && first === target) {
        return searchRange(nums, target, shift, [shift, e]);
    }
    
    if (e === -1 && last === target) {
        return searchRange(nums, target, shift, [b, end])
    }
    
    if (end === 0) {
        return result;
    }
    
    return searchRange(nums, target, shift+1, result);
};

// cycle 

var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > target) {
            break;
        }
        if (num != target) {
            continue;
        }
        first = first === -1 ? i : first;
        last = i;
    } 
    
    return [first, last];
};


