const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  return matrix
    .map((cValueY, cIndexY) => {
      return cValueY
        .map((cValueX, cIndexX) => {
          if (cValueX) return cValueX;
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              if (getSafe(matrix, cIndexX + x, cIndexY + y)) {
                if (matrix[cIndexX + x][cIndexY + y] === true) {
                  cValueX += 1;
                }
              }
            }
          }
          return cValueX || 0;
        });
    })
    .map(cV => cV
      .map(cVV => cVV === true ? 1 : cVV)
    );

  function getSafe (array, x, y) {
    try {
      array[x][y];
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = {
  minesweeper
};
