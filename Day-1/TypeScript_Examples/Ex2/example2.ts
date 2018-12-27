/**
 * Example2 - Class, constructor, interface, destructuring
 */

interface Employee {
    firstname: string;
    lastname: string;
    basic: number;
    allowance: number;
}

/* Defining a class */
class EmployeeDetails{
    fullname:string;

    constructor(emp:Employee){
        this.fullname = emp.firstname+" "+emp.lastname; 
    }

    getEmpSalary(newemp:Employee){
        let {basic, allowance} = newemp;     //destructuring
        return basic + allowance;
        // return newemp.basic + newemp.allowance;
    }
}

var emp1:Employee = {
    firstname: "Ajay",
    lastname: "Shah",
    basic: 5000,
    allowance: 100,
    color:"red"
}

/* Creating class instance */
var details = new EmployeeDetails(emp1);
console.log("Employee Fullname is " + details.fullname);
console.log("Employee Salary is  " + details.getEmpSalary(emp1));
