


const arrayNum=[ 11, 3, 4, 11, 4, 7, 3]
let array1=[]
for (let index = 0; index < arrayNum.length; index++) {
    result = [...new Set(arrayNum)];
    
}
console.log("After removing duplicate value from array the result is =>",result);

console.log(`""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`);
console.log(" ");

const inputString = "How you are mate";
const words = inputString.split(" ");
for (let index = 0; index < words.length; index++) {
    let word = words[index];
    word = word.charAt(0).toUpperCase() + word.slice(1, -1) + word.charAt(word.length - 1).toUpperCase();
    words[index] = word;
}
const resultString = words.join(" ");
console.log(`The first and last letter of each word in array is capital => ${resultString}`);

  