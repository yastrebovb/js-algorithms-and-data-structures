"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var frankenSplice = function frankenSplice(arr1, arr2, n) {
  var result = arr2.slice();
  result.splice.apply(result, [n, 0].concat(_toConsumableArray(arr1)));
  return result;
};

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // returns [4, 1, 2, 3, 5]