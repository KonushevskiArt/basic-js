import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let copyNToStr = String(n)

  const minNum = Math.min(...(copyNToStr.split('')))
  return Number(copyNToStr.replace(minNum, ''));
  // console.log(copyNToStr)
  // return Number(copyNToStr);
}
