/**
 * Example1 - Understanding Interfaces
 */

interface Employee {
    firstname: string;
    lastname: string;
    basic: number;
    allowance: number;
}

function getEmpSalary(emp:Employee):number {
    return emp.basic + emp.allowance;
}

var emp1:Employee = {
    firstname: "Ajay",
    lastname: "Shah",
    basic: 5000,
    allowance: 100
}

console.log("Total Salary of employee " + emp1.firstname + " " + emp1.lastname + " is " + getEmpSalary(emp1));


// Use tsc to compile a ts file into js (ES5)  
// tsc example1.ts
// node example1.js