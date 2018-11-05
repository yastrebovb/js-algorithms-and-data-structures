"use strict";

var repeatStringNumTimes = function repeatStringNumTimes(str, num) {
  var result = "";

  while (num > 0) {
    result += str;
    num--;
  }

  return result;
};

console.log(repeatStringNumTimes("abc", 3)); // returns abcabcabc