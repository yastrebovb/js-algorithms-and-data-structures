const sumFibs = num => {
  let sum = 2, prevPrev = 1, prev = 1, cur = 2;

  while (cur <= num) {
    if (cur % 2 !== 0) sum += cur; 

    prevPrev = prev;
    prev = cur;
    cur = prevPrev + prev;
  }

  return sum;
};

console.log(sumFibs(4)); // returns 5
