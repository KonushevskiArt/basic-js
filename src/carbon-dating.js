import { NotImplementedError } from '../extensions/index.js';

const INITIAL_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * ueDetermine the age of archeological find by using
 * given INITIAL_ACTIVITY and HALF_LIFE_PERIOD vals
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample( sampleActivity ) {
  if (typeof (sampleActivity) !== 'string') { 
    return false;
  }
  const samAct = Number(sampleActivity)

  if (isNaN(samAct) || samAct <= 0 || samAct > INITIAL_ACTIVITY) {
    return false;
  }

  const conRadioacDecay = 0.693 / HALF_LIFE_PERIOD;

  const res = Math.log(INITIAL_ACTIVITY / samAct) / conRadioacDecay;

  return Math.ceil(res);
}
