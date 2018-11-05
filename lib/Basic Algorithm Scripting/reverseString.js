"use strict";

var reverseString = function reverseString(str) {
  return str.split('').reverse().join('');
};

console.log(reverseString("hello")); // returns olleh