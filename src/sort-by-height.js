const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexes = arr.map(cV => cV == -1 ? cV = -1 : cV = 0);
  let arrSort = arr.filter(cV => cV != -1).sort((a, b) => a - b);
  let i = -1;

  return indexes.map(cV => {

    if(cV) {
      return cV;
    } else {
      i += 1;
      return cV = arrSort[i];
    }
  });
}

module.exports = {
  sortByHeight
};
