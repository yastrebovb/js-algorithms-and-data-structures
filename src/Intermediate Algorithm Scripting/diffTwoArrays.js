const diffArray = (arr1, arr2) => {
  let newArr = [];

  for (let el of arr1) {
    if (arr2.indexOf(el) === -1) newArr.push(el);
  }

  for (let el of arr2) {
    if (arr1.indexOf(el) === -1) newArr.push(el);
  }

  return newArr;
};

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // returns [4]
