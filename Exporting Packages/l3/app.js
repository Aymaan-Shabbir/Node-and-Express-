const greet = require("./f1/index");
console.log(greet);
// output->{ hindi: [Function: hindi], english: [Function: greet] }
greet.siu();
greet.hindi();
// output:
// hello
// greetings in hindi

//or destructure directly Method 2.

const { hindi, siu } = require("./f1/index");
hindi();
siu();
// output: greetings in hindi
// hello
