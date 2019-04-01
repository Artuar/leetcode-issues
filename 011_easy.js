// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  let prefix = '';
  if (strs.length === 1) {
    prefix = strs[0];
  } else if (strs.length > 0) {
    let current = '';
    main: for (let i = 0; i < strs[0].length; i++) {
      const l1 = strs[0][i];
      current = l1;
      for (let j = 1; j < strs.length; j++) {
        const l2 = strs[j][i];
        if (l1 !== l2) {
          break main;
        }
      }
      prefix += current;
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]), 'fl');
console.log(longestCommonPrefix(["flower","flow",""]), '');
console.log(longestCommonPrefix(["a"]), 'a');
console.log(longestCommonPrefix(["c", "c"]), 'c');
