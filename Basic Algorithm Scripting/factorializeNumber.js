const factorialize = (num) => num > 0 ? num * factorialize(num -1) : 1;

console.log(factorialize(5)); // returns 120
