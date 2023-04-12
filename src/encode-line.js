const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  return str
    ? str
      .match(/(.)\1*/g)
      .map(cV => cV.length == 1 ? cV.slice(0) : cV.length + cV.slice(0, 1))
      .join('')
    : '';
}

module.exports = {
  encodeLine
};
