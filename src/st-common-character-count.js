import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount( s1, s2 ) {
  const map = {};
  let res = 0;

  for (let sym of s1) {
    if (sym in map) {
      map[sym] += 1;
    } else {
      map[sym] = 1;
    }
  }

  for (let sym2 of s2) {
    if (sym2 in map && map[sym2] > 0) {
      res += 1;
      map[sym2] -= 1;
    } else {

    }
  }

  return res;
}
