// run with -> node app.js
let a = 20;
let b = 30;
console.log(a + b);
// output-> 50

// 2.function statement
function greet() {
  console.log("hello");
}
greet();
// output-> hello

//3. first class functions -> passing function as an arguement to other function
function log(aymaan) {
  aymaan();
}
//greet is a function which act as a parameter to other function
log(greet);
// output-> hello

//4.function expression
const fn = function () {
  console.log("greetings");
};

fn();
// output:greetings

//5. use function on the fly, without naming.

log(function () {
  console.log("function expression");
});
// output-> function expression
