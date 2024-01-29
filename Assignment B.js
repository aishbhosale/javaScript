
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

console.log("*********************************** Step 1 ************************************************************************");
arrayEmployees.sort(( s1,s2)=>{
    return s1.id>=s2.id ? 1 :-1;
});
arrayEmployees.forEach((element)=>{
    
    console.log(`Employees id => ${element.emp_id}, Employee name => ${element.emp_name}, Department => ${element.emp_dept}`); 
    
});

console.log(`************************************** Step 2 ***********************************************************`);
arrayEmployees.sort((a,b)=>{
    return a.emp_dept>b.emp_dept ? 1 : -1 ;

});

arrayEmployees.forEach((element)=>{
    
    console.log(`Employees id => ${element.emp_id}, Department => ${element.emp_dept}, Company Name => ${element.emp_company}`); 
    
});

console.log("*************************************** Step 3******************************************************************* ");
arrayEmployees.sort((a,b)=>{
    return a.emp_salary>b.emp_salary ? -1 : 1 ;

});

arrayEmployees.forEach((element)=>{
    
    console.log(`Employees id => ${element.emp_name}, Department => ${element.emp_salary}, Company Name => ${element.emp_company}`); 
    
});