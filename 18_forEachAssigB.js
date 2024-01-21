

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
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi,emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("********************************* Step 1************************************************************");
console.log(`The TCS Employees are ==>`);
arrayEmployees.forEach(element => {
    if (element.emp_company=="TCS") {
       console.log(`The employee name ${element.emp_name} company name ${element.emp_company}`); 
    }
});

console.log(" ");
console.log("********************************* Step 2************************************************************");
arrayEmployees.forEach(element => {
    if (element.emp_salary>=50000) {
      console.log(`The Employees id is ${element.emp_id} and employee name is ${element.emp_name} and its department is ${element.emp_dept} with Salary ${element.emp_salary} at company ${element.emp_company} `);  
    }
});
console.log(" ");
console.log("********************************* Step 3************************************************************");
const sum = arrayEmployees.reduce((runningTotal, element) =>{
    return runningTotal + element.emp_salary

},0);
console.log(`The sum of all employee salary is => ${sum}`);
console.log(" ");
console.log("********************************* Step 4************************************************************");
console.log(`The Average salary of Employee is =>${sum/ arrayEmployees.length}`);


console.log(" ");
console.log("********************************* Step 5************************************************************");

arrayEmployees.forEach(element => {
    if (element.emp_salary>=75000) {
    console.log(`The Employees id => ${element.emp_id} and employee name => ${element.emp_name} and its department => ${element.emp_dept} with Salary =>${element.emp_salary} at company => ${element.emp_company} `); 
    }
});