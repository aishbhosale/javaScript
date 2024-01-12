console.log(
  "*********************************Step -1**************************************************"
);
let sentence1 = "I am very good IT Developer";
console.log(`Given string is:  ${sentence1}`);
let vowelsCount = 0;
for (let index = 0; index < sentence1.length; index++) {
  let char = sentence1.charAt(index);
  if (
    char == `a` ||
    char == `e` ||
    char == `i` ||
    char == `o` ||
    char == `u` ||
    char == `A` ||
    char == `E` ||
    char == `I` ||
    char == `O` ||
    (char == `U` && char != " ")
  ) {
    vowelsCount = vowelsCount + 1;
  }
}
console.log(`Vowels count is : ${vowelsCount}`);

console.log(
  `***********************************Step 2*****************************************************`
);

let sum = 0;
for (let index = 1; index <= 5; index++) {
  sum += index * index * index;
}
console.log(`The sum of cubes of number from 1 to 5 is : ${sum}`);

console.log(
  `"""""""""""""""""""""""""""""""""""""Step-3""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`
);
let str1 = " Hard Work always pays back";
console.log(`Given string is : ${str1}`);
for (let index = 0; index < str1.length; index++) {
  let char = str1.charAt(index);
  if (index % 2 == 1 && char != " ") {
    console.log(str1.charAt(index));
  }
}

let str2 = " Soon I will be Angular IT Champ";
console.log(`Given string is : ${str2}`);
for (let index = 0; index < str2.length; index++) {
  let char = str2.charAt(index);
  if (index % 2 == 1 && char != " ") {
    console.log(str2.charAt(index));
  }
}
