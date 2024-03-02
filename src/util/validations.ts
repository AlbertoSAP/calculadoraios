/**
 * add the dash if
 * 1- the number is a decimal.
 * 2- if it is an integer.
 * @param baseNumber the value where we want to insert the dash.
 * @returns we return true if the chain meets the conditions to add a Dash otherwise false.
 */
export const addDash = (baseNumber: string): boolean =>
  baseNumber !== '0' || baseNumber.includes('0.');

/**
 * make sure that before entering a value to the base number.
 * 1- do not concatenate the first '0'.
 * 2- if it is 0 and we enter a '.' it is added.
 * @param baseNum the base number we are building.
 * @param value the value that will be entered into the base number.
 * @returns a true that we should not keep the zero at the beginning of the base number otherwise false and there is a point keep it.
 */
export const addValueBaseNumber = (baseNum: string, value: string): boolean =>
  baseNum.length === 1 && baseNum === '0' && value !== '.';
