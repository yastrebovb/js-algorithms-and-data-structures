const chunkArrayInGroups = (arr, size) => {
  let result = [], length = arr.length;

  for (let i = 0; i < length; i += size) {
    result.push(arr.splice(0, size));
  }

  return result;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // returns [['a', 'b'], ['c', 'd']]
