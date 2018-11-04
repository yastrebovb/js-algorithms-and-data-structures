const pairElement = str => {
  let result = [];
  let search = (char) => {
    switch (char) {
      case 'A':
        result.push(['A', 'T']);
        break;
      case 'T':
        result.push(['T', 'A']);
        break;
      case 'C':
        result.push(['C', 'G']);
        break;
      case 'G':
        result.push(['G', 'C']);
        break;
    }
  };

  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return result;
};

console.log(pairElement("ATCGA")); // returns [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
