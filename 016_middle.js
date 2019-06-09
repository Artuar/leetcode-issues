// 16. 3Sum Closest
// Medium
// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
//
//   Example:
//
// Given array nums = [-1, 2, 1, -4], and target = 1.
//
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const sorted = nums.sort((a, b) => a - b);
  let result = sorted[0]+sorted[1]+sorted[sorted.length-1];
  main: for (let i = 0; i < sorted.length; i++) {
    const first = sorted[i];
    let j = i+1;
    let k = sorted.length - 1;
    while (j < k) {
      const second = sorted[j];
      const third = sorted[k];
      const sum = first + second + third;
      if (sum > target) {
        k--;
      } else if (sum < target) {
        j++;
      } else {
        result = sum;
        break main;
      }

      const difS = target - sum;
      const difR = target - result;
      if (difS ** 2 < difR ** 2) {
        result = sum;
      }
    }
  }
  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1), 2);
console.log(threeSumClosest([0, 0, 0], 1), 0);
console.log(threeSumClosest([1, 2, 3, 4, 5, 6, 7], 11), 11);
