/**
 * @description Find the sum of all the multiples of 3 or 5 below upperBound (default value of 1000).
 * @param {integer} upperBound
 * @returns {integer}
 */

function problem1(upperBound = 1000) {
  let sum = 0;
  for (let i = 0; i < upperBound; i +=1) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}

console.log(`the sum of all the multiples of 3 or 5 below 1000 is ${problem1()}.`)
