import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsSpeedPerSeconds = turnsSpeed / 60 / 60;
  
  let turns = 1;
  let currentDiskNum = 1;
  while (currentDiskNum < disksNumber) {
    turns = turns * 2 + 1;
    currentDiskNum += 1;
  }
  const seconds = Math.floor(turns / turnsSpeedPerSeconds);

  return {turns, seconds}
}

