const myReplace = (str, before, after) => {
  if (/[A-Z]/.test(before[0])) after = after.charAt(0).toUpperCase() + after.slice(1);

  return str.replace(before, after);
};


console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // returns 'He is Sitting on the couch'
