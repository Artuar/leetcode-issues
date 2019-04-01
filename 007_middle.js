/**
  6. ZigZag Conversion
  Medium

  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

  P   A   H   N
  A P L S I I G
  Y   I   R
  And then read line by line: "PAHNAPLSIIGYIR"

  Write the code that will take a string and make this conversion given a number of rows:

    string convert(string s, int numRows);
  Example 1:

  Input: s = "PAYPALISHIRING", numRows = 3
  Output: "PAHNAPLSIIGYIR"
  Example 2:

  Input: s = "PAYPALISHIRING", numRows = 4
  Output: "PINALSIGYAHRPI"
  Explanation:

  P     I    N
  A   L S  I G
  Y A   H R
  P     I
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const new_str_arr = [];
  let current_level = 0;
  let level_choosing_up = true;
  for (let i = 0; i < s.length; i++) {

    if (!new_str_arr[current_level]) {
      new_str_arr[current_level] = [];
    }
    new_str_arr[current_level].push(s[i]);

    if (current_level === 0) {
      level_choosing_up = true;
    } else if (numRows <= current_level + 1) {
      level_choosing_up = false;
    }

    if (level_choosing_up) {
      current_level++;
    } else {
      current_level--;
    }


  }
  return new_str_arr.map(a => a.join('')).join('') || s;
};

console.log(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
console.log(convert("PAYPALISHIRING", 4), "PINALSIGYAHRPI");
console.log(convert("123456789", 3), "159246837");
console.log(convert("123456789", 4), "172683594");
console.log(convert("123456789", 2), "135792468");
console.log(convert("123456789", 1), "123456789");
console.log(convert("123456789", 5), "192837465");

// 1       9
// 2     8
// 3   7
// 4 6
// 5