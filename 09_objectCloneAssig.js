


console.log(`******************************************** Step 1 ***************************************`);


let bankSbi = {
    bankName: "State Bank of india",
    accNo: 9876543209,
    branch: "Pune",
    branchCode: 46,
}
console.log(`The bankSbi object contains:`);
console.log(bankSbi);

console.log(`******************************************** Step 2 ***************************************`);

let bankLocation = {

    Street: "Bharti vidyapeeth",
    city: "Pune",
    pincode:411046,
}
console.log(`The bankLocation object contains :`);
console.log(bankLocation);

console.log(`******************************************** Step 3 ***************************************`);

let mergeobj = Object.assign({},bankSbi, bankLocation);
console.log(`Cloning the object bankSbi and bankLocation :`);
 console.log(mergeobj);

 console.log(`**************************************Step 4 ****************************************************`);

 const rateOfInterest ={

    homeLoanInterest: 12.4,
    personalLoaninterest: 8.5,
    dueinterest:2.1,
 }
 console.log(`The created rateOfInterest object is :`);
 console.log(rateOfInterest);

 console.log(`***************************************Step 5 *************************************************************`);

 var sbiDetails = Object.assign(bankSbi,bankLocation,rateOfInterest
 );

 console.log(`Merge the step 1 , step 2 and step 3 objects :`);
 console.table(sbiDetails ); 
 
 console.log(`****************************************Step 6*******************************************************************`);
 console.log(`Traversing the sbiDetails merged object :`);
 
for (const key in sbiDetails)
 {
    
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        
        const element = sbiDetails[key];
        
        console.log(`${key}==> ${element}`);
    }
}
