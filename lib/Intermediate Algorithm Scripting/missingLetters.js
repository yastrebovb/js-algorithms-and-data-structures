"use strict";

var fearNotLetter = function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz',
      withMissing = alphabet.slice(alphabet.indexOf(str[0]));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = withMissing[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var char = _step.value;
      if (!str.includes(char)) return char;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

console.log(fearNotLetter("stvwx")); // returns 'u'