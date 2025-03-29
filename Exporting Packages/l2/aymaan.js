function greet(a, b) {
  console.log("hello , Aymaan Shabbir", a + b);
}
function subtract(a, b) {
  const c = a > b ? a - b : b - a;
  return c;
}
module.exports = {
  greet,
  subtract,
};
//module.exports - > exports a piece of code as an object.
