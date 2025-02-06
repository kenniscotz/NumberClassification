// utils/help.js

// Check if a number is prime
export function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Check if a number is perfect
export function isPerfect(num) {
  if (num < 2) return false;

  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
}

// Check if a number is an Armstrong number
export function isArmstrong(num) {
  const digits = String(num).split("");
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), digits.length),
    0
  );
  return sum === num;
}

// Calculate the sum of digits
export function sumOfDigits(num) {
  return String(num)
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
}
