// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let sq = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i; j < height.length; j++) {
      const max_i = i > j ? i : j;
      const min_i = max_i === i ? j : i;
      const min_n = height[j]>=height[i] ? height[i] : height[j];

      const num = (max_i - min_i) * min_n;
      if (num > sq) {
        sq = num;
      }
    }
  }
  return sq;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]), 49);