/**
 * Given a 2D board and a list of words from the dictionary, find all words in the board.

 Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.



 Example:

 Input:
 board = [
 ['o','a','a','n'],
 ['e','t','a','e'],
 ['i','h','k','r'],
 ['i','f','l','v']
 ]
 words = ["oath","pea","eat","rain"]

 Output: ["eat","oath"]


 Note:

 All inputs are consist of lowercase letters a-z.
 The values of words are distinct.
 */


/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(board, words) {
  const result = [];
  let hor = board.length;
  if (hor === 0) {
    return result;
  }
  const canFindAll = (j, k, word, m = 1, prev = []) => {
    let r = false;
    prev.push(`${j}-${k}`);
    if (!word[m]) {
      return true;
    }
    if (board[j][k+1] === word[m] && prev.indexOf(`${j}-${k+1}`) === -1) {
      r = canFindAll(j, k+1, word, m+1, [...prev]);
    }
    if (board[j][k-1] === word[m] && prev.indexOf(`${j}-${k-1}`) === -1) {
      r = canFindAll(j, k-1, word, m+1, [...prev]);
    }
    if (board[j-1] && board[j-1][k] === word[m] && prev.indexOf(`${j-1}-${k}`) === -1) {
      r = canFindAll(j-1, k, word, m+1, [...prev]);
    }
    if (board[j+1] && board[j+1][k] === word[m] && prev.indexOf(`${j+1}-${k}`) === -1) {
      r = canFindAll(j+1, k, word, m+1, [...prev]);
    }
    return r;
  };
  const isWordExist = (word) => {
    let res = false;
    main: for (j = 0; j < board.length; j++) {
      const row = board[j];
      for (k = 0; k < row.length; k++) {
        const char = row[k];
        if (char === word[0]) {
          if (canFindAll(j, k, word)) {
            res = true;
            break main;
          }
        }
      }
    }
    return res;
  };
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (isWordExist(word)) {
      result.push(word);
    }
  }
  return result;
};

console.log(findWords([
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
], ["oath","pea","eat","rain"]), [ 'oath', 'eat' ]);
console.log(findWords([["a","a"]], ["aaa"]), []);
console.log(findWords([
  ['o','t','o','o'],
  ['o','a','t','o'],
  ['o','o','a','o'],
  ['o','o','m','o']
], ["tatam","tam","mat","tatat"]), [ "tatam","tam","mat" ]);