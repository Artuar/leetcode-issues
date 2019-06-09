/**
18. 4Sum
Medium

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

  Note:

The solution set must not contain duplicate quadruplets.

  Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
  [
    [-1,  0, 0, 1],
    [-2, -1, 1, 2],
    [-2,  0, 0, 2]
  ]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const sorted = nums.sort((a, b) => a - b);
  const result = [];
  const addToResult = (arr) => {
    const isUnique = result.filter(r => r.toString() === arr.toString()).length === 0;
    if (isUnique) {
      result.push(arr);
    }
  };
  for (let i = 0; i < nums.length - 2; i ++) {
    const first = nums[i];
    for (let j = i + 1; j < nums.length - 1; j ++) {
      const second = nums[j];
      let k = j + 1;
      let l = nums.length - 1;
      while (k < l) {
        const third = nums[k];
        const forth = nums[l];
        const summ = first + second + third + forth;
        if (summ > target) {
          l--;
        } else if (summ < target) {
          k++;
        } else {
          addToResult([first, second, third, forth]);
          l--;
          k++;
        }
      }
    }
  }
  return result;
};
