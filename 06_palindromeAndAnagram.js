

console.log("********************************** Step 1 **********************************************************************");

let word1= "madam"
let word2= "dad"
let word3="hello"
function isPalindrome(word)  {
    let left = 0;
    let right = word.length-1;


    while(left<right){
    if( word[left] !== word[right]){
        return false;
    }
    left++;
    right--;
   }
return true ;

}
console.log(` Is the given string "madam" Palindrome => ${isPalindrome(word1)}`);
console.log(` Is the given string "dad" Palindrome => ${isPalindrome(word2)}`);
console.log(` Is the given string "hello" Palindrome => ${isPalindrome(word3)}`);

console.log(" ");
console.log(`*********************************** Step 2 ********************************************************************`);

const str1= "Silent ";
 const str2=" Listen ";

const resultStr1 = str1.split("").sort().join("");
 const resultStr2 = str2.split("").sort().join("");
console.log(`Are the words "Silent" and "Listen" anagram => `, resultStr1==resultStr2 ? false : true);


 const str3= "Hello ";
 const str4=" World ";

 const resultStr3 = str3.split("").sort().join("");
 const resultStr4 = str4.split("").sort().join("");
 console.log(`Are the words "Hello" and "World" anagram => `, resultStr3==resultStr4 ? true : false);

 const str5= "Such ";
 const str6=" Much ";

const resultStr5 = str5.split("").sort().join("");
 const resultStr6 = str6.split("").sort().join("");
console.log(`Are the words "Such" and "Much" anagram => `, resultStr5==resultStr6 ? true: false);



