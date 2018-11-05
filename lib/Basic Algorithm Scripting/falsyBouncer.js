"use strict";

var bouncer = function bouncer(arr) {
  return arr.filter(function (el) {
    return el;
  });
};

bouncer([7, "ate", "", false, 9]); // returns [7, 'ate', 9]