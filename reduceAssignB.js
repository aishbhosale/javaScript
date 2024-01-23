


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
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee( 55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66 , "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi,emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`*********************************** Step 1*****************************************************************`);
console.log(`The Wipro Employees are ==>`);
const a= arrayEmployees.filter(element => {
    if (element.emp_company=="Wipro") {
       console.log(`The Employee id:- ${element.emp_id}, employee name:- ${element.emp_name}, Employee Department:-${element.emp_dept}, Salary:-${element.emp_salary}, company name:- ${element.emp_company}`); 
    }
});
console.log(" ");
console.log(`*********************************** Step 2*****************************************************************`);
console.log(`The Employees from "IT" or "HR" Department =>`);
const b= arrayEmployees.filter(element => {
    if (element.emp_dept=="IT" || element.emp_dept=="HR") {
       console.log(`The Employee id:- ${element.emp_id}, employee name:- ${element.emp_name}, Employee Department:-${element.emp_dept}, Salary:-${element.emp_salary}, company name:- ${element.emp_company}`); 
    }
});
console.log(" ");
console.log(`*************************************Step 3**************************************************************`);
console.log(`The Employees Id's Greater than 50 => `);
const c= arrayEmployees.filter(element => {
    if (element.emp_id>50) {
       console.log(`The Employee id:- ${element.emp_id}, employee name:- ${element.emp_name}, Employee Department:-${element.emp_dept}, Salary:-${element.emp_salary}, company name:- ${element.emp_company}`); 
    }
});
console.log(" ");
console.log(`*********************************** Step 4*****************************************************************`);
console.log(`The Employees names Start with letter "A", "V", "M" =>`);
const d= arrayEmployees.filter(element => {
    if (element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")) {
       console.log(`The Employee id:- ${element.emp_id}, employee name:- ${element.emp_name}, Employee Department:-${element.emp_dept}, Salary:-${element.emp_salary}, company name:- ${element.emp_company}`); 
    }
});
console.log(`*********************************** Step 5*****************************************************************`);
const sum = arrayEmployees.reduce((runningTotal, element) =>{
    return runningTotal + element.emp_salary

},0);
console.log(`The Average salary of all Employees is => ${sum/ arrayEmployees.length}`);

console.log(`*********************************** Step 6*****************************************************************`);

const IT = arrayEmployees.filter(element => element.emp_dept == 'IT');
const Salary = IT.reduce((rt, element) => rt + element.emp_salary, 0);
const average = Salary / IT.length;
console.log('Average Salary of IT Department Employees is =>', average);










