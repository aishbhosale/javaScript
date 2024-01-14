
console.log(`*************************************Assignment 1***********************************************************************`);

let factorialOfNum= function(num){

if(num==0 || num==1){
return 1;

}

if(num<0 ){
    return ` Invalid input ${num}`;
}
if (num==null || num==undefined) {
    return `invalid input`
}
let result =1;
for (let index = 1; index <=num; index++) {
    
    result= result*index;
}
return result;
}
console.log(`Factorial of 5 is: ${result=factorialOfNum(5)}`);
console.log(`Factorial of 3 is: ${result= factorialOfNum(3)}`);
console.log(`Factorial of null is: ${result= factorialOfNum(null)}`);
console.log(`Factorial of 8 is: ${result= factorialOfNum(8)}`);
console.log(`Factorial of undefined is: ${result= factorialOfNum(undefined)}`);
console.log(`Factorial of 9 is: ${result= factorialOfNum(9)}`);
console.log(`Factorial of 0 is ${result= factorialOfNum(0)}`);