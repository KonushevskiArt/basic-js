import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  constructor() {
    this.depth = 1;
  }
  calculateDepth( arr, depth = 1) {
    
    arr.forEach(el => {
      let curDepth = depth;
      if (Array.isArray(el)) {
        curDepth += 1;
        if (this.depth < curDepth) {
          this.depth += 1;
        } 
        this.calculateDepth(el, curDepth)
      }
    })
    const res = this.depth;
    if (depth === 1) {
      this.depth = 1;
    }
    
    return res;
  }
}
