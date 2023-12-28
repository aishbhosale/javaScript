
console.log("************************** Step- 1*******************************");


function name(){
    var retu = "This function has No return value and no arguments"
    console.log(retu);   
}
name();
function learn(){
    var arg = "learning Function"
    console.log(arg);   
}
learn();

console.log("============================Step-2=============================");


function personaldetails(firstName,lastName,collegeName){
    console.log("Personal details are mentioned below :");
    console.log("My first name is :",firstName);
    console.log("My last name is :",lastName);
console.log("My college name is :", collegeName);
var firstName;
var lastName;
var collegeName;
}
personaldetails("Aishwarya","Bhosale","Abhinav college")

    


console.log("===============================step-3 ==========================");

function swapValues(name1,name2){
    console.log("Before Swaping :-");
    console.log("name1:",name1 );
    console.log("name2 :",name2);
    var temp= name1;
    name1=name2;
    name2=temp;
    console.log("After Swaping:-");
    console.log("name1 :",name1 );
    console.log("name2 :",name2);
}
   swapValues("virat", "Anushka");
   console.log("=================");
   swapValues(1000, 2000);

console.log("==========================step-4============================");

function addThreeValues(n1,n2,n3) {
    console.log("Given Three value is :",n1,n2,n3);
   
    var result= n1 + n2 + n3;
    console.log("Addition of three is :",result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");




