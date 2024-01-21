

const show=() => {

    console.log(`Good morning, Today is Thursday`);
}
show();

console.log(" ");

const multiply = (num1, num2,num3=1) => {
const result= num1*num2*num3;
return result;

}
const returnValue= multiply(5,5,2);
console.log(`The multiplication is ${returnValue}`);
const returnValue1=multiply(10,4)
console.log(`The multiplication is ${returnValue1}`);

console.log(" ");

const add=(n1,n2,n3,n4,n5) =>{
    console.log(`The addition of given number is ${n1+n2+n3+n4+n5}`);
}
add(100,100,200,349,756);
add("I am"," learning ","ES6 ", "features ", "in depth");
