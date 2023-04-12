const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const CAT_EARS = /^\^\^$/;

  return matrix.reduce((acc, cV1) => acc += cV1.filter(cV2 => CAT_EARS.test(cV2)).length, 0);
}

module.exports = {
  countCats
};
