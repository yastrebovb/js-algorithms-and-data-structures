const uniteUnique = function(arr) {
  let args = [...arguments], result = [];

  for (let i = 0; i < args.length; i++) {
    for (let el = 0; el < args[i].length; el++) {
       if (!result.includes(args[i][el])) result.push(args[i][el]);
    }
  }

  return result;
};


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // returns [1, 3, 2, 5, 4]
