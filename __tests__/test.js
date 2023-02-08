let algos = require("../arrayDiffs.js");

test("Return an array with all the unique numbers (the numbers that are not in both arrays).", () => {
  const result = algos.arrayDiffs([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5])
  expect(result).toEqual(expect.arrayContaining([44, 33, 4]));
});
