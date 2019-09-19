// 41. First Missing Positive
// https://leetcode.com/problems/first-missing-positive/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let minNumb = 1;
    let maxNumb = 1;
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(num > 0) {
            if(num < minNumb) minNumb = num;
            if(num > maxNumb) maxNumb = num;
        }
    }
    for(let j = 1; j <= maxNumb+1; j++) {
        if(!~nums.indexOf(j)) {
            return j;
        }
      }
};