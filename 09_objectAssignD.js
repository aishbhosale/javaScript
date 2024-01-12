
console.log(`**********************************Step 1***************************************************`);

let professor ={

    Name: "Shekhar rauth",
    age: 30,
    subject: "Maths",
    gender:"Male",
    
}
console.log(`The given object is :`);
console.log(professor);

console.log(` ***********************************Step 2 *******************************************************`);
console.log(`Added new property of total experience to the object :`);
professor.totalExperience="14 years"
console.log(professor);

console.log(`*************************************step 3 ***********************************************************`);
console.log(`Before age==>${professor.age}`);
console.log(`After age==> ${professor.age=34} `);

console.log(`************************************** Step 4***************************************************************`);

certificates=["HackerRank Participation" , "Certificate in IFE cource ", "Certificate in ADV Programming"]
console.log(`Before updating : ${certificates}`);
certificates.splice(2,0,"Oracle Certified" );
console.log(`After updating 2nd index of array : ${certificates}`);

console.log(`***************************************Step 5 *************************************************************`);
console.log(`The last element of array is : ${certificates[certificates.length-1]}`);

console.log(`*****************************************Step 6 **************************************************************`);
for (const element of certificates) {
    
console.log(element);
}
console.log(`******************************************Step 7****************************************************************`);
console.log(`added nested object degrees to the object`);
professor.degrees={
    engineering:"CSC",
    PHD:"Adv Computing",
}
console.log(`Degrees`,": ",professor.degrees);



 