/* Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

Expected Output:
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"} */

const instructorWithLongestName = function (instructors) {
  let theLongerName = [];
  for (let i = 0; i < instructors.length; i++) {
    if (theLongerName.length === 0) {
      theLongerName.push(instructors[i]); // need to put an object into theLongerName
    } else if (instructors[i].name.length > theLongerName[0].name.length) {
      theLongerName.pop(); // need to take the old object out
      theLongerName.push(instructors[i]); // put the longest object in
    }
  }
  return theLongerName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
