"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var steamrollArray = function steamrollArray(arr) {
  var _ref;

  var flat = (_ref = []).concat.apply(_ref, _toConsumableArray(arr));

  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
};

console.log(steamrollArray([1, [2], [3, [[4]]]])); // returns [1, 2, 3 , 4]