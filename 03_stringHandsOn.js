

function stringHandsOn() {
var string="  Hey You are Doing Good, Keep it up   ";
console.log(`01. Given string name is :- ${string}`);

console.log(`02. Total calculated number of string is : ${string.length}`);
var trimResult= string.trim();

console.log(`03. After trimming extra spaces length is : ${trimResult.length}`);

console.log(`04. Number of spaces removed are: ${string.length-trimResult.length}`);

var first= trimResult.charAt(0) ;
var last=trimResult.charAt(33);
console.log(`05. The first character and last character is :  ${first} , ${last}`);

var result= trimResult.split(" ");
console.log(`06. Total number of words in string : ${result.length}`);

var indexOfGood=trimResult.indexOf('Good');
console.log(`07. Index of word "Good" is : ${indexOfGood}`);

var result=trimResult.slice(22);
console.log(`08. Substring of index using slice is : ${result}`);

var result=trimResult.substring(22);
console.log(`    Substring of index using substring is : ${result}`);

var result= trimResult.startsWith("Hey");
console.log(`09. String start at word "Hey" is : ${result}`);
var result=trimResult.endsWith("up");

console.log(`10. String ends at word "up" is : ${result}`);

}

stringHandsOn()