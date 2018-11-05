"use strict";

var spinalCase = function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
};

spinalCase('This Is Spinal Tap'); // returns "this-is-spinal-tap"