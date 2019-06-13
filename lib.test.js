// install jest using yarn
// setup a script so you can run your tests with `yarn test`
// extract four core functions from your index.js file into lib.js for addOneToArray, filterEvenNumbers, findFirstOverFive and sumArray
// write at least one test for each function using jest

const test1 = require("./index");

test("loop over the array", function() {
  const arr = [1, 2, 3, 4, 5, 6];
  const expected = [1, 2, 3, 4, 5, 6];
  const actual = test1.forLoop(arr);
  expect(actual).toEqual(expected);
});

test("forEach to display content of an array", function() {
  const arr = [1, 2, 3, 4, 5, 6];
  const expected = [1, 2, 3, 4, 5, 6];
  const actual = test1.eachFor(arr);
  expect(actual).toEqual(expected);
});

test("use map to return each item + 1", function() {
  const arr = [1, 2, 3, 4, 5, 6];
  const expected = [2, 3, 4, 5, 6, 7];
  const actual = test1.map(arr);
  expect(actual).toEqual(expected);
});

test("use filter to filter out even numbers of an array", function() {
  const arr = [1, 2, 3, 4, 5, 6];
  const expected = [2, 4, 6];
  const actual = test1.filter(arr);
  expect(actual).toEqual(expected);
});

test("find and return the first number higher than 4", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const expected = 5;
  const actual = test1.find(arr);
  expect(actual).toEqual(expected);
});

test("use reduce to sum the total of an array", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const expected = 21;
  const actual = test1.reduce(arr);
  expect(actual).toEqual(expected);
});
