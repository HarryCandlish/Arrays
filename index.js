var arr = [1, 2, 3, 4, 5, 6];

//use for loop over the array and console log each item

function forLoop(arr) {
  x = [];
  for (let i = 0; i < arr.length; i++) x.push(arr[i]);
  return x;
}

//use arr.forEach to do the same thing

function eachFor(arr) {
  x = [];
  arr.forEach(n => {
    x.push(n);
  });
  return x;
}

//use arr.map to return an array where each item has had 1 added to it

function map(arr) {
  var x = arr.map(n => n + 1);
  return x;
}

//use arr.filter to return an array with only even numbers

function filter(arr) {
  var x = arr.filter(n => n % 2 === 0);
  return x;
}

//use arr.find to return the first number > 4

function find(arr) {
  var x = arr.find(n => n > 4);
  return x;
}

//use arr.reduce to sum the total of the array

function reduce(arr) {
  var x = arr.reduce((a, b) => a + b);
  return x;
}

//use arr.reduce to replicate the map, filter and find functionality

function mapReduce(arr) {
  var y = [];
  var x = arr.reduce((acc, n) => {
    y.push(n + 1);
  }, 0);
  return y;
}

function filterReduce(arr) {
  var x = [];
  var y = arr.reduce((acc, n) => {
    if (n % 2 === 0) x.push(n);
  }, 0);
  return x;
}

//refactor your code so that
// at least one function is defined as an anonymous function e.g. arr.map(function keyword function(item) {???})
// at least one function is using an inline es6 function with implicit return e.g. arr.map(item => ???)
// at least one function is using an inline es6 function with an explicit return e.g. arr.map(item => {return ???})
// at least one is using a named function as an argument arr.map(doSomething)

module.exports = {
  forLoop,
  eachFor,
  map,
  filter,
  find,
  reduce,
  mapReduce,
  filterReduce
};
