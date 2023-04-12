const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const MAX_LEVEL = Math.max(...domains.map(cV => (cV.match(/\./g)).length + 1));
  let pattern = '\\.[\\w-]+';

  return domains
    .map(cV => cV
      .split('.')
      .reverse()
      .map(cVV => '.' + cVV)
      .join('')
    )
    .reduce((collect, domain) => {
      for (let i = 0; i < MAX_LEVEL; i++) {
        let re = '^(' + pattern.repeat(i + 1) + ').*$';
        re = new RegExp(re)

        if (re.test(domain)) {
          collect[(domain.replace(re, '$1'))] = (collect[(domain.replace(re, '$1'))] || 0) + 1;
        }
      }

      return collect;
    }, {});
}

module.exports = {
  getDNSStats
};
