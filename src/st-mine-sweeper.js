import { NotImplementedError } from '../extensions/index.js';

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
const fillMatrix = (matrix) => matrix.map((el) => el.map(el => el = 0));

export default function minesweeper ( matrix ) {
  const emptyMatrix = fillMatrix(matrix);
  let chunk;

  for (let i = 0; i < matrix.length; i++) {
    chunk = matrix[i];
    for (let j = 0; j < chunk.length; j++) {
      console.log(emptyMatrix)
      if (chunk[j] === true) {
        
        try {
          if (typeof emptyMatrix[i][j + 1] === 'number') {
            emptyMatrix[i][j + 1] += 1;
          }
        } catch (error) {};
        try {
          if (typeof emptyMatrix[i][j - 1] === 'number') {
            emptyMatrix[i][j - 1] += 1;
          }
        } catch (error) {};
        try {
          if (typeof emptyMatrix[i - 1][j] === 'number') {
            emptyMatrix[i - 1][j] += 1;
          }
        } catch (error) {}
        try {
          if (typeof emptyMatrix[i - 1][j - 1] === 'number') {
            emptyMatrix[i - 1][j - 1] += 1;
          }
        } catch (error) {}
        try {
          if (typeof emptyMatrix[i - 1][j + 1] === 'number') {
            emptyMatrix[i - 1][j + 1] += 1;
          }
        } catch (error) {}
        try {
          if (typeof emptyMatrix[i + 1][j] === 'number') {
            emptyMatrix[i + 1][j] += 1;
          }
        } catch (error) {}
        try {
          if (typeof emptyMatrix[i + 1][j + 1] === 'number') {
            emptyMatrix[i + 1][j + 1] += 1;
          }
        } catch (error) {}
        try {
          if (typeof emptyMatrix[i + 1][j - 1] === 'number') {
            emptyMatrix[i + 1][j - 1] += 1;
          }
        } catch (error) {}
      } 
    }
  }
  return emptyMatrix;
}
