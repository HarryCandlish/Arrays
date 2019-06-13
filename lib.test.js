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