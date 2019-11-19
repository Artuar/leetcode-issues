/// https://leetcode.com/problems/substring-with-concatenation-of-all-words/
/// 30. Substring with Concatenation of All Words

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if(words.length === 0) {
    return [];
  }
  const wLength = words[0].length;
  const length = words.length * wLength;
  const positions = [];
  [...new Set(words)].forEach(word => {
    let i = 0;
    while(i <= s.length - length) {
      const current = s.indexOf(word, i);
      if (current === -1) {
        break;
      }
      i = current + 1;
      positions.push(current);
    }
  });
  return positions.filter(pos => {
    let tested = [...words];
    const str = s.substr(pos, length);
    let i = 0;
    while (i < s.length) {
      const word = str.substr(i, wLength);
      const p = tested.indexOf(word);
      if (p === -1) { break; }
      tested = tested.filter((v, ind) => ind !== p);
      i = i + wLength;
    }
    return tested.length === 0;
  });
};

// TODO: too long