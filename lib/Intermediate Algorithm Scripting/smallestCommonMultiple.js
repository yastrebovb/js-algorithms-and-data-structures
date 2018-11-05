"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var smallestCommons = function smallestCommons(arr) {
  arr.sort(function (a, b) {
    return a > b ? 1 : -1;
  });

  var _arr2 = _slicedToArray(arr, 2),
      div = _arr2[0],
      num = _arr2[1];

  while (div < arr[1]) {
    if (num % div === 0) {
      div++;
    } else {
      num += arr[1];
      div = arr[0];
    }
  }

  return num;
};

console.log(smallestCommons([1, 5])); // returns 60