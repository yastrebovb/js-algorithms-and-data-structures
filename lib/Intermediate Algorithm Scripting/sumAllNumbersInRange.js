"use strict";

var sumAll = function sumAll(arr) {
  var res = 0;
  var max = Math.max(arr[0], arr[1]),
      min = Math.min(arr[0], arr[1]);

  for (var i = min; i <= max; i++) {
    res += i;
  }

  return res;
};

console.log(sumAll([11, 4])); // returns 60