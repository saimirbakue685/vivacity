/*
File name: complexCode.js
Content: Complex code to perform a set of advanced mathematical operations
*/

// Define a function to calculate the factorial of a given number
function calculateFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

// Define a function to calculate the nth Fibonacci number
function calculateFibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let fibMinus2 = 0;
    let fibMinus1 = 1;
    let fib = 0;
    for (let i = 2; i <= n; i++) {
      fib = fibMinus1 + fibMinus2;
      fibMinus2 = fibMinus1;
      fibMinus1 = fib;
    }
    return fib;
  }
}

// Define a function to calculate the greatest common divisor of two numbers
function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

// Define a function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Define a function to calculate the sum of all prime numbers up to a given number
function calculateSumOfPrimes(limit) {
  let sum = 0;
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

// Define a function to find the square root of a number using the Babylonian method
function calculateSquareRoot(number) {
  let guess = number / 2;
  const precision = 0.000001; // Adjust the precision level as needed
  while (Math.abs(guess * guess - number) > precision) {
    guess = (guess + number / guess) / 2;
  }
  return guess;
}

// Example usage of the defined functions
console.log(calculateFactorial(5)); // Output: 120
console.log(calculateFibonacci(10)); // Output: 55
console.log(calculateGCD(24, 36)); // Output: 12
console.log(isPrime(17)); // Output: true
console.log(calculateSumOfPrimes(20)); // Output: 77
console.log(calculateSquareRoot(25)); // Output: 5.0000000727596