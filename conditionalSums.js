const conditionalSum = function (values, condition) {
  // condition relates to even or odd
  // if condition even, find the sum of even numbers
  // if condition odd, find the sum of odd numbers
  // if no values match condition, return 0
  let total = 0;
  for (let x = 0; x < values.length; x++) {
    if (values[x] % 2 === 0 && condition === "even") {
      total += values[x];
    } else if (values[x] % 2 !== 0 && condition === "odd") {
      total += values[x];
    }
  }
  return total;
};
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
