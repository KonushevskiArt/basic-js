import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats( domains ) {
  const mapRes = {}
  let minorDomains;
  
  for (let el of domains) {
    minorDomains = el.split('.').reverse();
    let curDomain = '';

    for (let minorEl of minorDomains) {
      curDomain += `.${minorEl}`;
      if (curDomain in mapRes) {
        mapRes[curDomain] += 1;
      } else {
        mapRes[curDomain] = 1;
      }
    }
  }

  return mapRes;
}
