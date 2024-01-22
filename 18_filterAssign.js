

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

console.log("********************************* Step 1************************************************************");
console.log(`The TCS Employees are ==>`);
const a= arrayEmployees.filter(element => {
    if (element.emp_company=="TCS") {
       console.log(`The employee name ${element.emp_name} company name ${element.emp_company}`); 
    }
});
console.log(" ");

console.log("************************************ Step 2********************************************************************");
const wipro = arrayEmployees.filter(element => element.emp_company == 'Wipro');
const Salary = wipro.reduce((rt, element) => rt + element.emp_salary, 0);
const average = Salary / wipro.length;
console.log('Average Salary of Wipro Employees is :', average);

console.log("");
console.log("******************************** Step 3************************************************************************");
const Wipro = arrayEmployees.filter(element => element.emp_company == 'Wipro' || element.emp_company=="Infy");
const salary = Wipro.reduce((rt, element) => rt + element.emp_salary, 0);
const Average = salary / Wipro.length;
console.log('Average Salary of Wipro and Infy Employees is :', Average);



