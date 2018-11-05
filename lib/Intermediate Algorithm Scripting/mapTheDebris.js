"use strict";

var orbitalPeriod = function orbitalPeriod(arr) {
  var GM = 398600.4418,
      earthRadius = 6367.4447;

  for (var prop in arr) {
    var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
    delete arr[prop].avgAlt;
    arr[prop].orbitalPeriod = orbitalPer;
  }

  return arr;
};

console.log(orbitalPeriod([{
  name: "sputnik",
  avgAlt: 35873.5553
}])); // returns [{name: "sputnik", orbitalPeriod: 86400}]