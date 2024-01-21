


const arrayNumbers =[20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

const arrayNumbers1 = arrayNumbers.map((element) =>{
return element + 10 ;

})
console.log(`**************************** Step 1 ****************************************`);
console.log(` Adding 10 to each element the result is =>`);
console.log( arrayNumbers1);

console.log(" ");
console.log(`**************************** Step 2 ****************************************`);

const arrayCube = arrayNumbers.map((element) =>{
 return element*element*element

});
console.log(`Cube of each array element is =>`);
console.log(arrayCube);

console.log(" ");
console.log(`**************************** Step 3 ****************************************`);

const arrayIndex =arrayNumbers.map((currentValue,index) =>{
 return currentValue + index

});
console.log(`Adding the index value into corresponding array element and result is =>`);
console.log(arrayIndex);


