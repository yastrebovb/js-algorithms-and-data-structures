"use strict";

var chunkArrayInGroups = function chunkArrayInGroups(arr, size) {
  var result = [],
      length = arr.length;

  for (var i = 0; i < length; i += size) {
    result.push(arr.splice(0, size));
  }

  return result;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // returns [['a', 'b'], ['c', 'd']]