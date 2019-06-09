// https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let res;
  for(let n = 0; n < nums.length; n++) {
    if (nums[n] === target || nums[n] > target) {
      res = n;
      break;
    }
  }
  return res === undefined ? nums.length : res;
};

console.log(searchInsert([1,3,5,6], 5), 2);
