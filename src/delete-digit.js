const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let nStr = String(n); 
  let arr = nStr.split('');
  let arrNums = [];

  arr.forEach((elem) => {
    let newStr = nStr.replace(elem, '');
    arrNums.push(Number(newStr));
  })
  arrNums.sort((a, b) => {
    return b - a;
  })

  return arrNums[0];
}

module.exports = {
  deleteDigit
};
