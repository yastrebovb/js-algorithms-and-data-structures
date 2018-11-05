const sumPrimes = num => {
  let sum = 0;

  const isPrime = num => {
    for(let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1 && num !== 0;
  };

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
};

console.log(sumPrimes(10)); // returns 17
