const largestOfFour = (arr) => {
  let result = [];

  for (let sub of arr) {
    result.push(Math.max.apply(Math, sub));
  }

  return result;
};

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // returns [5, 27, 39, 1001]
