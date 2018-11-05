const titleCase = (str) => {
  let words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
};

console.log(titleCase("I'm a little tea pot")); // return "I'm A Little Tea Pot"
