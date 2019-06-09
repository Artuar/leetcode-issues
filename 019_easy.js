// https://leetcode.com/problems/remove-element/
// 27. Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== val) {
      nums[pos] = num;
      pos++;
    }
  }
  return pos;
};