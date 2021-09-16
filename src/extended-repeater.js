import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  
  let res = '';
  const customDevider = 'RrY1{)';
  const convertedStr = String(str)
  const convertedAddition = String(addition)

  for (let i = 0; i < repeatTimes; i++) {
    let fullAddition = new Array(additionRepeatTimes).fill(convertedAddition).join(additionSeparator);
    
    res += convertedStr + fullAddition + customDevider ;
  }

  return res.split(customDevider).filter((el) => el !== '').join(separator);
}
