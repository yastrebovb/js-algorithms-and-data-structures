const telephoneCheck = str => /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/.test(str);

console.log(telephoneCheck("555-555-5555")); // returns true
