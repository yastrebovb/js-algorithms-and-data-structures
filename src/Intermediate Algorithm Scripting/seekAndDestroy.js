function destroyer(arr) {
  for (let i = 1; i < arguments.length; i++) {
    while (arr.indexOf(arguments[i]) > -1``) {
      arr.splice(arr.indexOf(arguments[i]), 1);
    }
  }

  return arr;
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // returns [1]  
