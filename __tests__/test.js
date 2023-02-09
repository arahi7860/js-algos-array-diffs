let algos = require("../arrayDiffs.js");

function pretty(arr) {
  return JSON.stringify(arr.sort())
}

test("Should filter out non-duplicates", () => {
  const result = algos.arrayDiffs([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5])
  expect(pretty(result)).toBe(pretty([44, 33, 4]));
});


test('Should return second since first is empty', () => {
  const result = algos.arrayDiffs([], [33, 1, 2, 3, 4, 5])
  expect(pretty(result)).toBe(pretty([33, 1, 2, 3, 4, 5]));
})

test('Should return second since first is empty 2', () => {
  const result = algos.arrayDiffs([33, 1, 2, 3, 4, 5], [])
  expect(pretty(result)).toBe(pretty([33, 1, 2, 3, 4, 5]));
})


test('Should return empty array', () => {
  const result = algos.arrayDiffs([1,2,3,4], [1,2,2,3,4])
  expect(pretty(result)).toBe(pretty([]));
})
