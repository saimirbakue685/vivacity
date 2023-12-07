/* Filename: ComplexCode.js
   Content: Demonstrating a complex mathematical algorithm in JavaScript */

// Generate an array of prime numbers up to a given limit
function generatePrimes(limit) {
  let primes = [];
  let isPrime = new Array(limit + 1).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  for (let p = 2; p * p <= limit; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= limit; i += p)
        isPrime[i] = false;
    }
  }

  for (let p = 2; p <= limit; p++) {
    if (isPrime[p])
      primes.push(p);
  }

  return primes;
}

// Generate the Fibonacci sequence up to a given limit
function generateFibonacciSequence(limit) {
  let fibonacci = [0, 1];

  while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= limit) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
  }

  return fibonacci;
}

// Calculate the factorial of a given number
function calculateFactorial(num) {
  if (num === 0 || num === 1)
    return 1;
  else
    return num * calculateFactorial(num - 1);
}

// Perform math operations and display results
function performMathOperations() {
  const limit = 100;

  console.log("Primes up to", limit, ":");
  console.log(generatePrimes(limit));

  console.log("Fibonacci sequence up to", limit, ":");
  console.log(generateFibonacciSequence(limit));

  const num = 5;
  console.log("Factorial of", num, ":");
  console.log(calculateFactorial(num));
}

performMathOperations();