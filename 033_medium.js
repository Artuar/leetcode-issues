// https://leetcode.com/problems/valid-sudoku/
// 36. Valid Sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const add = (arr, num) => {
  if (~arr.indexOf(num)) {
    return false;
  }
  arr.push(num);
  return true;
};

var isValidSudoku = function(board) {
    const cellSise = 3;
    const length = cellSise * cellSise;
    let filtredBoard = new Array(length).fill('').map(() => []);
    let rotatedBoard = new Array(length).fill('').map(() => []);
    let squaredBoard = new Array(length).fill('').map(() => []);
    let result = true;
    main: for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            const num = board[i][j];
            if(num === '.') continue;
            if(!add(filtredBoard[i], num) ||
               !add(rotatedBoard[j], num) ||
               !add(squaredBoard[(i - i%3) + j/3^0], num)) {
                console.log(num);
                result = false;
                break main;
            }

        }
    }
    return result;
};
