"use strict";

var convertHTML = function convertHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, "&apos;");
};

console.log(convertHTML("Dolce & Gabbana")); // returns ' Dolce &​amp; Gabbana'