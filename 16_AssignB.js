

class Employee{
    constructor( emp_id, emp_name, emp_dept, emp_salary, emp_company){

        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee( 22, "Anil", "IT", 50000,"TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee( 55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66 , "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, " Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi,emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`********************************* Step 1 *****************************************************************`);
console.log(`The Employess Working at TCS are ==>`);
for (const element of arrayEmployees) {
if (element.emp_company=="TCS" ) {
    console.log(`The Employee Name is ${element.emp_name} and Company name is ${ element.emp_company}`);
}   
}
console.log(" ");
console.log(`********************************* Step 2 *****************************************************************`);
console.log(`The Finance Department employees are ==>`);
for (const element of arrayEmployees) {
    if ( element.emp_dept=="Finance") {
       console.log(`The Employee Name is ${element.emp_name} and It's Department is ${element.emp_dept}`); 
    }
    
}
console.log(" ");
console.log(`********************************* Step 3 *****************************************************************`);

console.log(`The Employees whose name starts with "R" is ==>`);
for (const element of arrayEmployees) {
    if (element.emp_name.startsWith("R")) {
        console.log(`The Employee id is ${element.emp_id} and name is ${element.emp_name} and its department is ${element.emp_dept } salary is ${element.emp_salary} company name is ${element.emp_company }`);
    }
}
console.log(" ");
console.log(`********************************* Step 4 *****************************************************************`);

console.log(`The Employee whose salary is greater than 75000 ==>`);
for (const element of arrayEmployees) {
    if (element.emp_salary>75000) {
        console.log(`The Employee name is ${element.emp_name} and company is ${element.emp_company} salary is ${element.emp_salary}`);
    }
}
console.log(" ");
console.log(`********************************* Step 5 *****************************************************************`);

console.log(`The Employee whose salary is greater than equal to 50000 from IT ==>`);
for (const element of arrayEmployees) {
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
       console.log(`The Employee id is ${ element.emp_id} employee name ${element.emp_name} department is ${element.emp_dept} salary is ${element.emp_salary} company name ${element.emp_company}`); 
    }
}
console.log(" ");
console.log(`********************************* Step 6 *****************************************************************`);

console.log(`The Employees from company infy is ==>`);
for (const element of arrayEmployees) {
    if (element.emp_company=="Infy") {
    console.log(`The Employee id is ${ element.emp_id} employee name ${element.emp_name} department is ${element.emp_dept} salary is ${element.emp_salary} company name ${element.emp_company}`);
    }
}