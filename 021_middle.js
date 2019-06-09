// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const buttons = {
    '1' : [],
    '2' : ['a', 'b', 'c'],
    '3' : ['d', 'e', 'f'],
    '4' : ['g', 'h', 'i'],
    '5' : ['j', 'k', 'l'],
    '6' : ['m', 'n', 'o'],
    '7' : ['p', 'q', 'r', 's'],
    '8' : ['t', 'u', 'v'],
    '9' : ['w', 'x', 'y', 'z'],
  };
  const comb = (index, arr = []) => {
    const char = digits[index];
    if (char) {
      const cur = buttons[char];
      if (cur.length === 0) {
        return comb(++index, arr);
      }
      if (arr.length === 0) {
        return comb(++index, cur);
      }

      const now = [];
      for (let i = 0; i < arr.length; i++) {
        const str1 = arr[i];
        for (let j = 0; j < cur.length; j++) {
          const str2 = cur[j];
          now.push(str1 + str2);
        }
      }
      return comb(++index, now);
    }
    return arr;
  };
  return comb(0);
};

console.log(letterCombinations("23"));
console.log(letterCombinations("12131"));
