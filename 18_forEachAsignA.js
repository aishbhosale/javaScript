

console.log(`****************************** Step 1 ***************************************************************`);
const arrayNumbers= [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`The Given array is ${arrayNumbers}`);
arrayNumbers.forEach( (currentValue, index) => {
    console.log(`${index } ==> ${currentValue }`);
});
console.log(" ");
console.log(`****************************** Step 2 ***************************************************************`);
console.log(`The Positive Numbers are `);
arrayNumbers.forEach(element => {
    if (element>0) {
      console.log(element);  
    }
});
console.log(" ");
console.log(`****************************** Step 3 ***************************************************************`);
console.log(`The negative Numbers are `);
const arrayPositive1= [];
arrayNumbers.forEach(( currentValue)=>{
    if (currentValue<0) {
       arrayPositive1.push(currentValue);
       

    }
});
console.log( arrayPositive1);

console.log(" ");
console.log("********************************** Step 4 *********************************************************************");
console.log(`The even numbers are`);

arrayNumbers.forEach((currentValue) => {
  if (currentValue%2==0) {
    console.log(currentValue);
  }
});

console.log(" ");
console.log("*********************************** Step 5 ******************************************************************");
let sum1 = 0;

arrayNumbers.forEach( (element) =>{
  sum1 =sum1 + element;
}
);
console.log(`The sum of all elements in array is ${sum1}`);
console.log(" ");
console.log("************************************ Step 6 *******************************************************************");
console.log(`The even indexed value in array are`);
arrayNumbers.forEach((value, index) => {
  if (index % 2 === 0) {
    console.log(`${index} ==> ${value}`);
  }
});