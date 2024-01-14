
console.log(`*********************************Assignment 2***************************************************************************`);


function factorialNum(inputString) {
  console.log(`Given string is: "${inputString}"`);
  if (inputString == null) {
    return `invalid input`;
  }
  if (inputString < 0) {
    return 1;
  }
  const wordsCount = inputString
    .split(" ")
    .filter((word) => word.length > 0).length;
  console.log(`The total words count is: ${wordsCount} `);
  let result = 1;
  for (let index = 1; index <= wordsCount; index++) {
    result = result * index;
  }
  return result;
}
console.log(
  `The factorial is ${factorialNum("Revision is the mother of success")}`
);
console.log(" ");
console.log(
  `The factorial is ${factorialNum(" We never fail, we always learn, mind it")}`
);
console.log(" ");
console.log(`The result of null is: ${factorialNum(null)}`);
console.log(" ");
console.log(`The factorial is ${factorialNum("")}`);
console.log(" ");
console.log(`the factorial is ${factorialNum("Aishwarya Jayendra Bhosale")}`);
