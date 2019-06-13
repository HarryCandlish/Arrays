var arr = [1, 2, 3, 4, 5, 6];

//use for loop over the array and console log each item

function forLoop(arr) {
  x = [];
  for (let i = 0; i < arr.length; i++) x.push(arr[i]);
  return x;
}

//use arr.forEach to do the same thing

//use arr.map to return an array where each item has had 1 added to it

//use arr.filter to return an array with only even numbers

//use arr.find to return the first number > 4

//use arr.reduce to sum the total of the array

//use arr.reduce to replicate the map, filter and find functionality

//refactor your code so that
// at least one function is defined as an anonymous function e.g. arr.map(function keyword function(item) {???})
// at least one function is using an inline es6 function with implicit return e.g. arr.map(item => ???)
// at least one function is using an inline es6 function with an explicit return e.g. arr.map(item => {return ???})
// at least one is using a named function as an argument arr.map(doSomething)

module.exports = {
  forLoop
};
