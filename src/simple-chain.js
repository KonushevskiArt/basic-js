import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {
    return this.length;
  },
  addLink( value = '' ) {
    if (!this.chain || this.chain === null) {
      this.chain = `( ${String(value)} )`;
    } else {
      this.chain += `~~( ${String(value)} )`;
    }
    if (this.length) {
      this.length += 1;
    } else {
      this.length = 1;
    } 
    return this;
  },
  removeLink( position ) {
    
    const arr = this.chain.split('~~')
    if ((typeof (Number(position)) === 'number') && arr[+position - 1]) {
      arr.splice(+position - 1, 1)
      this.chain = arr.join('~~');
    } else {
      this.chain = null;
      throw new Error(`You can't remove incorrect link!`);
    }
    return this;
  },
  reverseChain() {
    if (this.chain !== null && this.chain) {
      this.chain = this.chain.split('~~').reverse().join('~~');
    }
    return this;
  },
  finishChain() {
    const res = this.chain
    this.chain = null;
    return res;
  }
};