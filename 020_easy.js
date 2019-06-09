// https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let result;
  if (needle === '') {
    return 0;
  }
  const check = (hi, ni = 0) => {
    const char = needle[ni];
    if (!char) {
      return true;
    } else if (char === haystack[hi]) {
      return check(++hi, ++ni);
    } else {
      return false;
    }
  };
  for (let i = 0; i < haystack.length; i++) {
    if (check(i)) {
      result = i;
      break;
    }
  }
  return result !== undefined ? result : -1;
};

console.log(strStr("hello", "ll"), 2);
console.log(strStr("hello", ""), 0);
console.log(strStr("hello", "g"), -1);
console.log(strStr("a", "a"), 0);

// TODO: make me better :)
