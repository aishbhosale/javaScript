

 
   console.log("***********************************Step 1*******************************************************"); 
function sName(arg1) {
    
}
    let string1="Hard word always pays back";
    console.log(`Given string is : ${string1}`);
let result = "";

for (let index = string1.length-1; index >=0; index--) {

    let char =string1.charAt(index);
if ( char!=" ") {
    result = result + string1.charAt(index);
  
}
 
}

 console.log(`Reverse of string is : ${result}`);

 console.log(" ");
console.log("**********************************Step-2************************************************************");

 let string2="Soon I will br UI IT Champ";
    console.log(`Given string is : ${string2}`);
let result1 = "";

for (let index = string2.length-1; index >=0; index--) {

    let char =string2.charAt(index);
if ( char!=" ") {
    result1 = result1 + string2.charAt(index);
}
}

console.log(`Reverse of String is : ${result1}`);