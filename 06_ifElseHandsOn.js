
console.log("**************************Step 1**************************************");

var checkStart = function(num){
    if (num%2==0) {
        return"Even"
        
    } else {
        return "Odd"
    }
}
var result =checkStart(45);
console.log(`45 Given number is ${result} `);
var result= checkStart(70);
console.log(`70 Given number is ${result}`);
var result = checkStart(67);
console.log(`67 Given number is ${result}`);
var result =checkStart(98);
console.log(`98 Given number is ${result}`);

console.log(" ");
console.log("******************************Step 2***************************************");

var vote= function(age){
    console.log(`Age= ${age}`);
    if (age>=18) {
        console.log(`This person is eligible to vote`);

    } else {
        console.log(`This person is not eligible to vote`);

    }
    

}
vote(18);
vote(20);
vote(17);
vote(40)



console.log(" ");
console.log("******************************** Step 3*******************************************");

var character= function(a1) { 
    var a1 =a1.length

    if (a1.length){
        console.log("The Javascript contains less then 10 character");
    } else {
        console.log("The javascript string contain more than 10 character");
    }
    
}
character("JavaScipt-ES6");

console.log(" ");
console.log("********************************* Step 4 **************************************");
var checkStart = function(word){
    if (word.startsWith("JavaScript Language")) {
        console.log("Given string start with word java ");
    } else {
        console.log("Given word does not start with java ");
    }
}
checkStart("JavaScript Language")

