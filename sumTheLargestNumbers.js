// In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

let num1 = 0;
let num2 = 0;

const sumLargestNumbers = function (data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] > num1) {
      num1 = data[i];
    }
  }
  for (let j = 0; j < data.length; j++) {
    if (data[j] > num2 && data[j] < num1) {
      num2 = data[j];
    }
  }
  return num1 + num2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
