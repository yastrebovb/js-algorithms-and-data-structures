const findElement = (arr, func) => {
  for (let num of arr) {
    if (func(num)) return num;
  }

  return undefined;
};

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // return 2
