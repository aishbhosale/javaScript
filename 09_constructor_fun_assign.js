


class Bank{

constructor (bName, location, ifscCode, branchCode) {
this.bName=bName;
this.location=location;
this.ifscCode=ifscCode;
this.branchCode=branchCode;

}
getdetails(){
    console.log(`Bank Name: ${this.bName}, Location:${this.location}, IFSC Code: ${this.ifscCode}, Branch Code:${this.branchCode}`);
}
}
console.log(`************************************** Step 1 & 2 **********************************************************************`);
const yesBank =new Bank("Yes Bank" , " Pune", "YESB00MJ00" , 9800);
console.log(`Bank Details are as follows:`);
yesBank.getdetails();
console.log(" ");
const sbiBank =new Bank("State Bank Of India", "Kothrud"  , "SBI00987J" , 76845 );
console.log(`Bank Details are as follows:`);
sbiBank.getdetails();
console.log(" ");
const mahBank = new Bank("Maharashtra Bank ", "satara", "MAHA7659", 45678);
console.log(`Bank Details are as follows:`);
mahBank.getdetails();
console.log(" ");
const axisBank =new Bank("Axis Bank","Shivajinagar", "AXIS00657", 345652);
console.log(`Bank Details are as follows:`);
axisBank.getdetails();
console.log("*************************************Step 3 & 4************************************************************************** ");
console.log(`Adding open Time and close Time :`);
console.log(`Open Time : ${Bank.prototype.openTime= "9 AM IST"}`);
console.log(`Close Time: ${Bank.prototype.closeTime="6 PM IST"}`);
console.log(" **************************************Step 5 ******************************************************************");
console.log(`Open time of sbibank is : ${sbiBank.openTime} `);
console.log(`Close time of sbibank is: ${sbiBank.closeTime}`);
console.log(" ***************************************Step 6********************************************************************");
console.log(`The bankName  is :${axisBank.bName} `);
console.log(`The close time of axisBank is: ${axisBank.closeTime}`);
console.log(" ******************************************Step 7****************************************************************");
console.log(`The bankName is : ${yesBank.bName}`);
console.log(`The branch Code is : ${yesBank.branchCode}`);
console.log(`The open Time is: ${yesBank.openTime}`);


