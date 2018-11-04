const fearNotLetter = str => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz', withMissing = alphabet.slice(alphabet.indexOf(str[0]));

  for (let char of withMissing) {
    if (!str.includes(char)) return char;
  }
};

console.log(fearNotLetter("stvwx")); // returns 'u'
