/**
 4. Median of Two Sorted Arrays
 Hard

 There are two sorted arrays nums1 and nums2 of size m and n respectively.

 Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

 You may assume nums1 and nums2 cannot be both empty.

 Example 1:

 nums1 = [1, 3]
 nums2 = [2]

 The median is 2.0
 Example 2:

 nums1 = [1, 2]
 nums2 = [3, 4]

 The median is (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // get midian index
  const index = (nums1.length + nums2.length) / 2;
  const isWhole = !(index % 1);
  const first = isWhole ? index : index + 0.5;
  const last = isWhole ? index + 1 : index + 0.5;
  const newArr = [];
  // create one array until get indexes
  for (let i = 0; i < last; i++) {
    const one = nums1[0];
    const two = nums2[0];
    if (two === undefined || two > one) {
      nums1.shift();
      newArr.push(one);
    } else {
      nums2.shift();
      newArr.push(two);
    }
  }
  return (newArr[first - 1] + newArr[last - 1]) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2]), 2.0);
console.log(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
console.log(findMedianSortedArrays([1], []), 1.0);
console.log(findMedianSortedArrays([-1], [0, 1]), 0);