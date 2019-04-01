// 1. Two Sum

/**
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 Example:

 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].

 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let response = [];
  for (let f_ind = 0; f_ind < nums.length; f_ind++) {
    const first = nums[f_ind];
    const second = target - first;
    const s_ind = nums.indexOf(second);
    if (~s_ind && f_ind !== s_ind) {
      response = [f_ind, s_ind];
      break;
    }
  }
  return response;
};

console.log(twoSum([2, 7, 11, 15], 9));