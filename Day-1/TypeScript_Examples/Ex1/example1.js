/**
 * Example1 - Understanding Interfaces
 */
function getEmpSalary(emp) {
    return emp.basic + emp.allowance;
}
var emp1 = {
    firstname: "Ajay",
    lastname: "Shah",
    basic: 5000,
    allowance: 100
};
console.log("Total Salary of employee " + emp1.firstname + " " + emp1.lastname + " is " + getEmpSalary(emp1));
// Use tsc to compile a ts file into js (ES5)  
// tsc example1.ts
// node example1.js
