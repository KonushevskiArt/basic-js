import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type ? 'direct' : 'reverse';
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    // a 97 in UNICODE
    // z 122 in  UNICODE
    // 25 symbols in alphabet

    const lowerMessage = message.toLowerCase();
    let encryptedStr = '';
    let countSpace = 0;
    const lowerKey = key.toLowerCase();

    const filledKey = this.fillKey(lowerMessage.length, lowerKey);

    for (let i = 0; i < lowerMessage.length; i++) {
      if (/[a-z]/.test(lowerMessage[i])) {
        let diff = lowerMessage.charCodeAt(i) - 97 // 97 - 'a' in unicode
        const charCodeWidthDiff = filledKey.charCodeAt(i - countSpace) + diff;

        let currentCode = charCodeWidthDiff > 122 ?  charCodeWidthDiff - 26: charCodeWidthDiff;

        encryptedStr += String.fromCharCode(currentCode)
      } else {
        countSpace += 1;
        encryptedStr += lowerMessage[i];
      }
    }

    if (this.type === 'direct') {
      return encryptedStr.toUpperCase();
    } else {
      return encryptedStr.toUpperCase().split('').reverse().join('');
    }
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let decriptedStr = '';
    let countSpace = 0;
    const lowerMessage = message.toLowerCase();
    const lowerKey = key.toLowerCase();

    const filledKey = this.fillKey(lowerMessage.length, lowerKey);

    for (let i = 0; i < lowerMessage.length; i++) {
      if (/[a-z]/.test(lowerMessage[i])) {
        let diff = filledKey.charCodeAt(i - countSpace) - 97 // 97 - 'a' in unicode
        const charCodeWidthDiff = lowerMessage.charCodeAt(i) - diff;
        let currentCode = charCodeWidthDiff < 97 ?  122 - (96 - charCodeWidthDiff) : charCodeWidthDiff;

        decriptedStr += String.fromCharCode(currentCode)
      } else {
        countSpace += 1;
        decriptedStr += lowerMessage[i];
      }
    }

    if (this.type === 'direct') {
      return decriptedStr.toUpperCase();
    } else {
      return decriptedStr.toUpperCase().split('').reverse().join('');
    }
  }

  fillKey(length, key) {
    let filledKey = key;
    while (length > filledKey.length) {
      filledKey += key;
    }
    return filledKey;
  }
}
