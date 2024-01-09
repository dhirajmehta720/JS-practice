let a =
  "You cannot end a sentence with because because because is a conjunction";
let b = a.indexOf("because");
console.log(typeof b);
console.log(a.substr(b, 23));
