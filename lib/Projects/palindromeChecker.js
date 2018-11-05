"use strict";

var palindrome = function palindrome(str) {
  // 1. Removing all non-alphanumeric 
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // 2. Reversing string and checking equality

  return str === str.split('').reverse().join('');
};

console.log(palindrome("A man, a plan, a canal. Panama")); // returns true