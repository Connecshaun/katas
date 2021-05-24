/* 

In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.

Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

Expected output:
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure

*/

const urlEncode = function (text) {
  let newString = "";
  for (let i = 0; i < text.length; i++) {
    if ((i === 0 || i === text.length - 1) && text[i] === " ") {
      newString += "";
    } else if (text[i] === " ") {
      newString += "%20";
    } else {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
