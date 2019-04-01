// 3. Longest Substring Without Repeating Characters

/**
 *
 Given a string, find the length of the longest substring without repeating characters.

 Example 1:

 Input: "abcabcbb"
 Output: 3
 Explanation: The answer is "abc", with the length of 3.
 Example 2:

 Input: "bbbbb"
 Output: 1
 Explanation: The answer is "b", with the length of 1.
 Example 3:

 Input: "pwwkew"
 Output: 3
 Explanation: The answer is "wke", with the length of 3.
 Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let length = 0;
  let used_array = [];
  const string_to_array = s.split('');
  const arr_length = string_to_array.length;
  const push = c => {
    used_array.push(c);
    if (used_array.length > length) {
      length = used_array.length;
    }
  };

  first: for (let i = 0; i < arr_length; i++) {
    used_array = [];
    push(string_to_array[i]);
    const next = i + 1;
    for (let j = next; j < arr_length; j++) {
      const char = string_to_array[j];
      if (~used_array.indexOf(char)) {
        continue first;
      }
      push(char);
    }
  }
  return length;
};

console.log(lengthOfLongestSubstring('pwwkew'), 3);
console.log(lengthOfLongestSubstring(' '), 1);
console.log(lengthOfLongestSubstring('dvdf'), 3);


// TODO !!!
/// can be better if use new Set ()
