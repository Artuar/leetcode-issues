/**
 * 7. Reverse Integer
 Easy

 Given a 32-bit signed integer, reverse digits of an integer.

 Example 1:

 Input: 123
 Output: 321
 Example 2:

 Input: -123
 Output: -321
 Example 3:

 Input: 120
 Output: 21
 Note:
 Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2**31,  2**31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX = 2147483647;
  const MIN = -2147483648;

  let symb = 1;
  let str = `${x}`;
  let newStr = '';
  for (let i = str.length-1; i >= 0; i--) {
    const char = str[i];
    if(char === '-') {
      symb = -1;
    } else {
      newStr += char;
    }
  }

  newStr = +newStr * symb;
  if (newStr > MAX || newStr < MIN) {
    newStr = 0;
  }

  return newStr;
};

console.log(reverse(-120), -21);
