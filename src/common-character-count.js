const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  return s1.split('').reduce((acc, cV) => {
    const RE = new RegExp(`${cV}`);
    if (RE.test(s2)) {
      s2 = s2.replace(RE, "");
      return acc + 1;
    }
    return acc + 0;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
