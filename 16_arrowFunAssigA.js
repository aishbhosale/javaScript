

const show=() => {
console.log(` ******************************** Step 1 **********************************************`);
    console.log(`Good morning, Today is Thursday`);
}
show();

console.log(" ");

const multiply = (num1, num2,num3=1) => {
const result= num1*num2*num3;
return result;

}
const returnValue= multiply(5,5,2);
console.log(` ******************************** Step 2 **********************************************`);
console.log(`The multiplication of 5,5,2 is => ${returnValue}`);
console.log(" ");

const returnValue1=multiply(10,4)
console.log(`The multiplication of 10,4 is => ${returnValue1}`);

console.log(" ");

const add=(n1,n2,n3,n4,n5) =>{
    console.log(`${n1+n2+n3+n4+n5}`);
}
console.log(` ******************************** Step 3 **********************************************`);
console.log(`The addition of given number 100,100,200,349,756 is =>`);
add(100,100,200,349,756);
console.log(" ");
console.log(`The additio of passed value "I am", "Learning", "ES6", "Features", "in depth" is =>`);
add("I am"," learning ","ES6 ", "features ", "in depth");
