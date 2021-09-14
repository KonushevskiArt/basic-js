import { NotImplementedError } from '../extensions/index.js';

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
export default function countCats(matrix) {
  const res = matrix.reduce((res, el) => {
    res += el.reduce((minRes, minEl) => {
      minRes += minEl === '^^' ? 1 : 0;
      return minRes;
    }, 0);
    return res;
  }, 0)
  return res;
}
