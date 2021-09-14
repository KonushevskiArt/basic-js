import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  let clone = arr.slice();

  const map = {
    '--discard-next': (arr, i) => {
      arr[i + 1] === undefined ? arr.splice(i, 1) : arr.splice(i, 2, null);
      clone = transform(arr);
     },
    '--discard-prev': (arr, i) => {
      arr[i - 1] === undefined ? arr.splice(i, 1) : arr.splice(i - 1, 2, null);
      clone = transform(arr);
    }, 
    '--double-next': (arr, i) => {
      arr[i + 1] === undefined || arr[i + 1] === null ? arr.splice(i, 1) : arr.splice(i, 1,  arr[i + 1]);;
      clone = transform(arr);
    }, 
    '--double-prev': (arr, i) => {
      arr[i - 1] === undefined || arr[i - 1] === null ? arr.splice(i, 1) : arr.splice(i, 1, arr[i - 1]);
      clone = transform(arr);
    }, 
  }

   for (let i = 0; i < arr.length; i++) {
    if (arr[i] in map) {
      map[arr[i]](clone, i);
      return clone.filter(el => el !== null);
    }
  }

  return clone;
}
