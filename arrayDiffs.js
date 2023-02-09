//ARRAY DIFFERENCES

const arrayDiffs = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    // Looping through values in array 1
    // you can check if array 2 has any of the values that is in array 1
    // if it doesnt have the same number figure out how to store the results that it doesnt have
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  console.log(result);
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  // console.log(result);
  return result;
};

console.log(arrayDiffs([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5]));

module.exports = {
  arrayDiffs,
};
