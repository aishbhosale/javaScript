



const arrayRollNumbers=[113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`The Given string is :`);
console.log(arrayRollNumbers);
console.log(`************************** Step 1 *************************************`);
arrayRollNumbers.reverse("")
console.log(`The Array after reverse is :`);
console.log(arrayRollNumbers);
console.log(`*************************** Step 2************************************`);

arrayRollNumbers.sort()
console.log(`The Array using sort() method: `);
console.log(arrayRollNumbers);

console.log(`**************************** Step 3***********************************`);

arrayRollNumbers.sort((a,b)=>{
    return a>b ?1 : -1 ;

});
console.log(`The Array in Ascending order:`);
console.log(arrayRollNumbers);
console.log(`**************************** Step 4 ***********************************`);

arrayRollNumbers.sort((a,b) =>{
 return a-b;
});
const greater= arrayRollNumbers[arrayRollNumbers.length-1];
console.log(`The Greater number from the array is :`);
console.log(greater);
console.log(`**************************** Step 5***********************************`);

arrayRollNumbers.sort((a,b) =>{
    return b-a;
   });
   const smaller= arrayRollNumbers[arrayRollNumbers.length-1];
   console.log(`The Smaller number from the array is :`);
   console.log(smaller);

   console.log(`************************** Step 6*************************************`);
   arrayRollNumbers.sort((a,b)=>{
    return a>b ?1 : -1 ;

});
   for (let i = 1; i < arrayRollNumbers.length; i++) {
    if (arrayRollNumbers[i] === arrayRollNumbers[i - 1]) {
        arrayRollNumbers.splice(i, 1);
        i--; 
    }}
    console.log(`After removing duplicate numbers from given array: `);
    console.log(arrayRollNumbers);