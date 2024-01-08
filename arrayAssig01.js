

console.log(`*************************Step-1*****************************************************************************************************`);


let fruits = ["Banana", "Orange", "Apple", "Mango","Water Melon"]
console.log(`Before array : ${fruits}`);
let element2= fruits.slice(0,1);
let element3=fruits.slice(4,5)
console.log(`Array of first element is : ${element2}`);
console.log(`Array of last element is : ${element3}`);

console.log("************************Step- 2******************************************************************************************************");
let fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"]
console.log(`Before adding array : ${fruits_seasonal}`);
fruits_seasonal.unshift("Papaya")
console.log(`After adding the array : ${fruits_seasonal}` );

console.log("");

console.log("************************Step- 3*******************************************************************************************************");
let fruits_seasonal1 = ["Banana", "Orange", "Apple", "Mango","Water Melon"]
console.log(`Before array : ${fruits_seasonal1}`);
fruits_seasonal1.splice(3,1);
console.log(`After removing array : ${fruits_seasonal1}`);
console.log(" ");
console.log("*************************Step- 4**************************************************************************************************");

let fruits_seasonal2 = ["Banana", "Orange", "Apple", "Mango","Water Melon"]
console.log(`Before array : ${fruits_seasonal2}`);
fruits_seasonal2.push("Pineapple");
console.log(`After inserting an element : ${fruits_seasonal2}`);

console.log(" ");
console.log("************************Step- 5 ***************************************************************************************************");
let fruits_seasonal3 = ["Banana", "Orange", "Apple", "Mango","Water Melon"]
console.log(`Before array : ${fruits_seasonal3}`);
fruits_seasonal3.splice(4,0,"Dry fruits" )
console.log(`After adding an element : ${fruits_seasonal3} `);
console.log(" ");
console.log("***************************Step -6***************************************************************************************************");

let fruits_seasonal4 = ["Banana", "Orange", "Apple", "Mango","Water Melon"]
console.log(`Before array : ${fruits_seasonal4}`);
fruits_seasonal4.splice(1,1,"kiwi")
console.log(`After replacing orange with kiwi element : ${fruits_seasonal4}`);

console.log(" ");
console.log(`*****************************Step- 7**********************************************************************************************`);

let fruits_seasonal6 = ["Banana", "Orange", "Apple", "Mango","Water Melon"]
console.log(`Before array : ${fruits_seasonal6}`);
let element= fruits_seasonal6.slice(1,4);
console.log(`Elements starting from index 1to 4 : ${element}`);

console.log("");
console.log(`*******************************Step 8***********************************************************************************************`);

let fruits_seasonal7 = ["Banana", "Orange", "Apple", "Mango","Water Melon"]
console.log(`Before array : ${fruits_seasonal7}`);
let element1= fruits_seasonal7.slice(fruits_seasonal7.length-3)
console.log(`Select last three elements : ${element1}`);


