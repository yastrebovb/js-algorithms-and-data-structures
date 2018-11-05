const mutation = (arr) => {
  for (let char of arr[1].toLowerCase()) {
    if (arr[0].toLowerCase().indexOf(char) === -1) return false;
  }

  return true;
};

mutation(["hello", "hey"]); // returns false
