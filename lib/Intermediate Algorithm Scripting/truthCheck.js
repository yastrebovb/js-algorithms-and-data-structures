"use strict";

var truthCheck = function truthCheck(collection, pre) {
  return collection.every(function (obj) {
    return obj.hasOwnProperty(pre) && obj[pre];
  });
};

truthCheck([{
  "user": "Tinky-Winky",
  "sex": "male"
}, {
  "user": "Dipsy",
  "sex": "male"
}, {
  "user": "Laa-Laa",
  "sex": "female"
}, {
  "user": "Po",
  "sex": "female"
}], "sex"); // returns true