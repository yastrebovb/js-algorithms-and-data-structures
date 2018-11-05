"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function destroyer(arr) {
  for (var i = 1; i < arguments.length; i++) {
    while (arr.indexOf(arguments[i]) > -1(_templateObject())) {
      arr.splice(arr.indexOf(arguments[i]), 1);
    }
  }

  return arr;
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // returns [1]