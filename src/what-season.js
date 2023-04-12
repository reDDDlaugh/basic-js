const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');

  const FAKE = date.toString;
  const SEASONS = {
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
    winter: [0, 1, 11]
  };

  if (/return/.test(FAKE)) throw new Error('Invalid date!');

  for (let s in SEASONS) {
      if (SEASONS[s].includes(date.getMonth())) return s;
  }
}

module.exports = {
  getSeason
};
