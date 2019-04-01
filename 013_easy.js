// https://leetcode.com/problems/valid-parentheses/submissions/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const ops = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const his = [];
  let res = true;
  for (let i = 0; i < s.length; i++) {
    const cr = s[i];
    const op = ops[cr];
    if (op) {
      his.push(op);
    } else if (cr !== his.pop()) {
      res = false;
      break;
    }
  }
  if (his.length > 0) {
    res = false;
  }
  return res;
};

console.log(isValid('()'), true);
console.log(isValid('([)]'), false);
console.log(isValid("()[]{}"), true);
console.log(isValid("{[]}"), true);
console.log(isValid("{"), false);
