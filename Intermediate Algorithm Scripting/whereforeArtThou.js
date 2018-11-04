function whatIsInAName(collection, source) {
  let properties = Object.keys(source);

  return collection.filter(function (obj) {
    for(let i = 0; i < properties.length; i++) {
      if (!obj.hasOwnProperty(properties[i]) || obj[properties[i]] !== source[properties[i]]) return false;
      
    }
    return true;
  });
}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // returns  [{ first: "Tybalt", last: "Capulet" }]
