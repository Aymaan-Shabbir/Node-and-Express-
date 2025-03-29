const hindi = require("./hindi");
const english = require("./english");
// importing name can be anything

// hindi();
// english();
// output->
// greetings in hindi
// hello

module.exports = {
  hindi: hindi,
  siu: english,
};
// naming of objects used in export should be same\
// eg : here siu is an object which has function english-> while importing the siu object can be used as importingNameOfConstant.siu
// eg while importing const greet = require("/abc") is used , now greet has all objects-> hindi and siu. Therefore greetings.hindi() and greetings.siu()
