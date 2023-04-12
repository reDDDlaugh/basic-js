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
  let array = new Array(('' + n).length)
    .fill(0)
    .map((_, cI) => ('' + n).split('').filter((_, cI1) => cI1 != cI).reduce((acc, cV) => acc += (+cV)));

  return Math.max(...array) || n;
}

module.exports = {
  deleteDigit
};
