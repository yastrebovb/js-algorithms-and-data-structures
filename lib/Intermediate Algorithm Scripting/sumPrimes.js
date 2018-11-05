"use strict";

var sumPrimes = function sumPrimes(num) {
  var sum = 0;

  var isPrime = function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }

    return num !== 1 && num !== 0;
  };

  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
};

console.log(sumPrimes(10)); // returns 17