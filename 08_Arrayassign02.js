

console.log(`********************* Step 1******************************`);
const array =[20,31,40,25,23,11,29,9,60,2,11];
console.log(`The given string is : ${array}`);
let result= array.length;
console.log(`The length of given array is : ${result}`);

console.log(" **************Step 8**********");

const array1 =[20,31,40,25,23,11,29,9,60,2,11];
let sum=0;
for (const index in array) {
    sum = sum + array[index];

}
console.log(`The sum of array : ${sum}`);

console.log(" ********Step 9**********");

const array2 =[20,31,40,25,23,11,29,9,60,2,11];
let sum1 =0;
for (const index in array2) {

    if (array2[index]%5==0) {
       console.log(array2[index]); 
    }
}

console.log("**********Step 10************");
const array3 =[20,31,40,25,23,11,29,9,60,2,11];
let result2 = array3.includes(115);
console.log(`${result2}`);

console.log("************* Step 11********************");
const array4 =[20,31,40,25,23,11,29,9,60,2,11];
let result3 = array4.includes(23);
console.log(`${result3}`);


console.log("************Step 12****************");
const array5 =[20,31,40,25,23,11,29,9,60,2,11];
 array5.splice(3,0,55,66);
console.log(`${array5}`);


console.log(`****************Step 13***********************`);
const array6 =[20,31,40,25,23,11,29,9,60,2,11];
array6.splice(4,3);
console.log(`${array6}`);

console.log(`**********step 4************`);

const array8 =[20,31,40,25,23,11,29,9,60,2,11];

for (const index in array8) {

    if (array8[index]%2==0) {
       console.log(array8[index]); 
    }
}
console.log(`****** Step 5*******`);
const array9 =[20,31,40,25,23,11,29,9,60,2,11];

for (const index in array9) {

    if (array9[index]%2==1) {
       console.log(array9[index]); 
    }
}

console.log(`*********** step 3 *********************`);

const arrayN =[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayN[arrayN.length-3]);

console.log(`**************step 4 *******************************`);

const arrayNN =[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNN[0]);
console.log(arrayNN[10]);

console.log(`*************** step 6 *********************`);


const arrayNn =[20,31,40,25,23,11,29,9,60,2,11]; 
 let sum3 = 0;
 let sum2=0;
for ( let index=0; index<arrayNn.length ;index++) {

    if( index%2==0 ){ 
sum3 =sum3 + arrayNn[index];
}
if (arrayNn[index%2==0]) {
    sum2 =sum2 + arrayNn[index]
}
}
console.log(`${sum3} `);


console.log(`*************step 7******************`);

const arry =[20,31,40,25,23,11,29,9,60,2,11]; 
 let sum5 = 0;
 let sum6=0;
for ( let index=0; index<arrayNn.length ;index++) {

    if( index%2==1 ){ 
sum5 =sum5 + arrayNn[index];
}
if (arrayNn[index%2==1]) {
    sum6 =sum6 + arrayNn[index]
}
}
console.log(`${sum5} `);
