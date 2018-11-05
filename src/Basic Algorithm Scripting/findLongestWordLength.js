const findLongestWordLength = (str) => {
  let arr = str.split(' '), longest = 0;
  
  for (let word of arr) {
    if (word.length > longest) longest = word.length;
  }

  return longest;
};

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // returns 6 
