/**
 * @description The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */


function largestPrimeFactor(num) {
  let largestPrimeFactor = 0; // I know zero is not prime. Neither is one, and two isn't gauranteed to be a factor.
  let currentDivisor = 2;
  let dividend = num;
  const maxPrimeFactor = Math.floor(Math.sqrt(num));

  while (dividend > 1 && currentDivisor <= maxPrimeFactor) {
    if (isPrime(currentDivisor) && dividend % currentDivisor === 0) {
      largestPrimeFactor = currentDivisor;
      dividend /= currentDivisor;
    }
    currentDivisor += 1;
  }
  return largestPrimeFactor;
}


function primeFactors(num) {
  let currentDivisor = 2;
  let dividend = num;
  const maxPrimeFactor = Math.floor(Math.sqrt(num));
  const primeFactors = [];

  while (dividend > 1 && currentDivisor <= maxPrimeFactor) {
    if (isPrime(currentDivisor) && dividend % currentDivisor === 0) {
      primeFactors.push(currentDivisor);
      dividend /= currentDivisor;
    }
    currentDivisor += 1;
  }
  return primeFactors;
}

function isPrime(num) {
  if (Math.floor(num) !== num) throw new TypeError("Integers only, please.");
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const maxPrimeFactor = Math.floor(Math.sqrt(num));

  for (let i = 3; i <= maxPrimeFactor; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}



console.log("the prime factors of 2000:", primeFactors(2000));
console.log("the prime factors of 600851475143:", primeFactors(600851475143));

const answer = largestPrimeFactor(600851475143);
console.log(`The largest prime factor of 600851475143 is ${answer}.`);
