// 26. Remove Duplicates from Sorted Array
// Easy

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var removeDuplicates = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const previous = nums[i - 1];
    if (current !== previous) {
      result.push(current);
    }
  }
  return result;
};

console.log(removeDuplicates([1 , 1, 2]), [ 1, 2 ] );
