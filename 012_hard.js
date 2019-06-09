// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let cur_symb_ind = 0;
  let cur_let_ind = 0;
  const parse = (letter) => {

    const cur_symb = p[cur_symb_ind];
    const next_symb = p[cur_symb_ind + 1];

    if (next_symb === '*') {
      if (cur_symb === '.' || letter === cur_symb) {
        return true;
      }
      if (letter !== cur_symb) {
        cur_symb_ind = cur_symb_ind + 2;
        cur_let_ind--;
      }
      return true;
    } else if (cur_symb === '.' || letter === cur_symb) {
      cur_symb_ind++;
      return true;
    }
    return false;
  };

  let result = true;
  for (cur_let_ind = 0; cur_let_ind < s.length; cur_let_ind++) {
    if (!parse(s[cur_let_ind])) {
      result = false;
      break;
    }
  }

  if (p[cur_symb_ind] && p[cur_symb_ind + 1] !== '*') {
    return false;
  } else   if (p[cur_symb_ind+2] && p[cur_symb_ind+2] !== s[cur_let_ind - 1]) {
    return false;
  }

  return result;
};

// console.log(isMatch('abc', 'a.c'), true);
// console.log(isMatch('ba', 'c*b*a'), true);
// console.log(isMatch('mississippi', 'mis*is*p*.'), false);
// console.log(isMatch('mississippi', 'mis*is*ip*.'), true);
// console.log(isMatch('', ''), true);
// console.log(isMatch('ab', '.*'), true);
// console.log(isMatch('', '.*'), true);
// console.log(isMatch("ab", ".*c"), false);
// console.log(isMatch("aaa", "aaaa"), false);
// console.log(isMatch("aaa", "aaaa"), false);
// console.log(isMatch("aa", "a*"), true);
// console.log(isMatch("aaa", "a*a"), true);
console.log(isMatch("aaa", "ab*a*c*a"), true);
