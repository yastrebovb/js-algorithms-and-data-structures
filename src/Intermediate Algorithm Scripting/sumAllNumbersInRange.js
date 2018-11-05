const sumAll = arr => {
  let res = 0;
  let max = Math.max(arr[0], arr[1]), min = Math.min(arr[0], arr[1]);

  for (let i = min; i <= max; i++) {
    res += i;
  }

  return res;
};

console.log(sumAll([11, 4])); // returns 60

