// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result = -1;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === target) {
            result = i;
            break;
        }
    }
    return result;
};

// TODO: find better solution
