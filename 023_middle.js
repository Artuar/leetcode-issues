// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const createAll = (c) => {
    let r = [];
    if (c === 0) {
      return r;
    }
    let cur = '';
    for (let i = 0; i < c; i++) {
      cur = '('+cur+')';
    }
    r.push(cur);

    let inside = createAll(c - 1);
    for (let k = 0; k < inside.length; k++) {
      r.push('('+inside[k]+')');
    }
    
    for (let m = 1; m < c; m++) {
      let sec = c - m;
      let f = createAll(m);
      let s = createAll(sec);
      f.forEach(fi => {
        if(s.length === 0){
          r.push(fi);
        }
        s.forEach(se => {
          r.push(fi+se);
        })  
      });
    }

    return r;
  };

  const resultSet = new Set(createAll(n));

  return Array.from(resultSet);
};

// todo : make me better

console.log(generateParenthesis(0).length, 0);
console.log(generateParenthesis(1).length, 1);
console.log(generateParenthesis(2).length, 2);
console.log(generateParenthesis(3).length, 5);
console.log(generateParenthesis(4).length, 14);
console.log(generateParenthesis(5).length, 42);
