const translatePigLatin = str => {
  switch (str.search(/[aeiou]/)) {
    case -1: 
      return str.concat('ay');
    case 0:
      return str.concat('way');
    default:
      return str.replace(/(^[^aeiou]+)(\w*)/,'$2$1ay');
  }
};

console.log(translatePigLatin("consonant")); // returns 'onsonantcay'
