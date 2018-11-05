const confirmEnding = (str, target) => str.substring(str.length - target.length) === target;

console.log(confirmEnding("Bastian", "n")); // returns true
