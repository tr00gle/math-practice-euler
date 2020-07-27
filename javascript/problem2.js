/**
  @description By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */


/**
 * @param {number} upperBound
 * @param {callback} callback - a function that returns a boolean
 */
function fibonnaciFilteredSum(upperBound, callback = () => true) {
  let sum = 0;
  let previous = 1;
  let current = 1;
  while (current <= upperBound) {
    const temp = previous + current;
    if (callback(temp)) {
      sum += temp;
    }
    previous = current;
    current = temp;
  }
  return sum;
}

/**
 * @param {number} num
 * @returns {boolean]}
 */
const isEven = num => num % 2 === 0;

const answer = fibonnaciFilteredSum(4000000, isEven);

console.log(`The sum of the even terms less than or equal to four million in the fibonacci sequence is ${answer}.`)
