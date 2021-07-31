/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The first array to check.
 * @param {Array} [values=[]] - The values to remove from first array.
 * @returns {Array} Returns the new array of filtered values.
 */

export const filtering = (array, values) => {
  let filteredArray = array.filter((x) => !values.includes(x)); // remove values from array
  filteredArray = filteredArray.filter(
    (value, index) => filteredArray.indexOf(value) === index,
  ); // remove duplicated values
  return filteredArray;
};
