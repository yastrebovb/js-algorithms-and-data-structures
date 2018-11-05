"use strict";

var confirmEnding = function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
};

console.log(confirmEnding("Bastian", "n")); // returns true