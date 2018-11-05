const smallestCommons = arr => {
  arr.sort((a, b) => a > b ? 1 : -1);

  let [div, num] = arr;

  while (div < arr[1]) {
    if (num % div === 0) {
      div++;
    } else {
      num += arr[1];
      div = arr[0];
    }
  }

  return num;
}

console.log(smallestCommons([1,5])); // returns 60
