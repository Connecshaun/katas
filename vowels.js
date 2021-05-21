// Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.
// In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.
// Expected output: 3 5 5

const numberOfVowels = function (data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      data[i] === "a" ||
      data[i] === "e" ||
      data[i] === "i" ||
      data[i] === "o" ||
      data[i] === "u"
    ) {
      total += 1;
    }
  }
  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
