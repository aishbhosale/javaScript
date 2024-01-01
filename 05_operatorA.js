console.log(
    "**********************************Section A****************************************************************"
  );

function squareOfWordLength(word1, word2, word3) {
  var word1;
  var word2;
  var word3;
  console.log("Give string is :", word1);
  var word = word1.length;
  console.log("The length of string is :", word);
  var result = word1.length * word1.length;
  console.log("The square of length is :", result);
  console.log(
    "******************************************************************************************************************"
  );
  console.log("Given string is : ", word2);
  var worda = word2.length;
  console.log("The length of string is :", worda);
  var result = word2.length * word2.length;
  console.log("The square of length is :", result);

  console.log(
    "***************************************************************************************************"
  );

  console.log("Given string is :", word3);
  var wordb = word3.length;
  console.log("The length of string is :", wordb);
  var result = word3.length * word3.length;
  console.log("The square of length is :", result);
}
squareOfWordLength("JavaScript", "Google Chrome", "Developer Smart");

console.log(
  "**********************************Section B*****************************************************************"
);

function name() {
  var string = "I am Angular Developer";
  console.log(`Given string is : ${string}`);
  var result = string.length;
  console.log(`The length of string is : ${result}`);
  var result = string.split(" ");
  console.log(`The total number of word in string : ${result.length}`);
  console.log("****************************************************************************************************");

  console.log(
    `Division of string length with total words :${
      string.length / result.length
    }`
  );
  console.log(
    `Multiplication of string length with total words : ${
      string.length * result.length
    }`
  );
}
name();
