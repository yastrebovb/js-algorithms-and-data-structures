"use strict";

var getIndexToIns = function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
};

console.log(getIndexToIns([5, 3, 20, 3], 5)); // returns 2