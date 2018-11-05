"use strict";

function addTogether() {
  var first = arguments[0];

  if (arguments.length === 2) {
    if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      return arguments[0] + arguments[1];
    } else {
      return undefined;
    }
  }

  if (Number.isInteger(arguments[0])) {
    return function () {
      if (typeof arguments[0] === 'number') {
        return first + arguments[0];
      } else {
        return undefined;
      }
    };
  }
}

console.log(addTogether(2, 3)); // returns 5