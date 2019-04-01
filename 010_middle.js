// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */


const getRbyI = num => {
  switch (num) {
    case 1:
      return 'I';
    case 5:
      return 'V';
    case 10:
      return 'X';
    case 50:
      return 'L';
    case 100:
      return 'C';
    case 500:
      return 'D';
    case 1000:
      return 'M';
  }
};

const getRomanSymb = (num, divider) => {
  if (num === 10 || num === 5 || num === 1) {
    return getRbyI(num * divider);
  } else if (num === 9 || num === 4) {
    return getRbyI(1 * divider) + getRbyI((num+1) * divider);
  } else if (num > 5) {
    return getRbyI(5 * divider) + getRomanSymb(num - 5, divider);
  } else if (num === 3) {
    return getRbyI(1 * divider) + getRbyI(1 * divider) + getRbyI(1 * divider);
  } else if (num === 2) {
    return getRbyI(1 * divider) + getRbyI(1 * divider);
  } else if (num === 0) {
    return '';
  }
};

var intToRoman = function(num, power = 1) {
  const divider = 10 ** power;
  const rest = num % divider;
  const next = num - rest;
  const roman = getRomanSymb(rest / divider * 10, divider / 10);
  if (!next) {
    return roman;
  }
  return intToRoman(next, power + 1) + roman;
};

console.log(intToRoman(1), 'I');
console.log(intToRoman(3), 'III');
console.log(intToRoman(4), 'IV');
console.log(intToRoman(5), 'V');
console.log(intToRoman(8), 'VIII');
console.log(intToRoman(58), 'LVIII');
console.log(intToRoman(10), 'X');
console.log(intToRoman(100), 'C');
console.log(intToRoman(1994), 'MCMXCIV');
