const convertToRoman = num => {
  let result = [],
      numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  // Loop through the numbers while the number is greater than the input num
  numbers.map((number, i) => { 
    while (num >= number) {
      result += roman[i];
      num -= number;
    }
  });

  return result;
};


console.log(convertToRoman(36));// returns 'XXXVI'
