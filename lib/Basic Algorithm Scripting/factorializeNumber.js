"use strict";

var factorialize = function factorialize(num) {
  return num > 0 ? num * factorialize(num - 1) : 1;
};

console.log(factorialize(5)); // returns 120