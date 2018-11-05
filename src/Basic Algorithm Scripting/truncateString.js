const truncateString = (str, num) => str.length <= num ? str : str.substr(0, num) + '...';

console.log(truncateString("Absolutely Longer", 2)); // returns 'Ab...'
