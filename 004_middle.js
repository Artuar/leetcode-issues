/**
  5. Longest Palindromic Substring
  Medium

  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

  Example 1:

  Input: "babad"
  Output: "bab"
  Note: "aba" is also a valid answer.
    Example 2:

  Input: "cbbd"
  Output: "bb"
 */


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let current = '';
  let string = '';
  let oneByOne = true;
  const getMaxPalFromPos = (s, index, l_shift, r_shift) => {
    const char = s[index];
    if (!char) {
      return string;
    }
    if (!string) {
      string = string + char;
    }
    const next = s[index + r_shift];
    if (char === next && oneByOne) {
      string = string + next;
      return getMaxPalFromPos(s, index, l_shift, r_shift+1)
    } else {
      oneByOne = false;
      const prev = s[index - l_shift];
      if (next && prev && next === prev) {
        string = prev + string + next;
        return getMaxPalFromPos(s, index, l_shift+1, r_shift+1);
      } else {
        return string;
      }
    }
  };
  for (let i = 0; i < s.length; i++) {
    string = '';
    oneByOne = true;
    const maxPalindrome = getMaxPalFromPos(s, i, 1, 1);
    if (maxPalindrome.length > current.length) {
      current = maxPalindrome;
    }
  }
  return current;
};

console.log(longestPalindrome("babad"), "bab");
console.log(longestPalindrome("babab"), "babab");
console.log(longestPalindrome("cbbd"), "bb");

// TODO !!!
// Solution can be more beautiful
// Don`t operate letters, use only indexes

