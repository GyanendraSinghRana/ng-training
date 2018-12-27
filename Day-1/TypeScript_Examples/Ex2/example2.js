/**
 * Example2 - Class, constructor, interface, destructuring
 */
/* Defining a class */
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(emp) {
        this.fullname = emp.firstname + " " + emp.lastname;
    }
    EmployeeDetails.prototype.getEmpSalary = function (newemp) {
        var basic = newemp.basic, allowance = newemp.allowance; //destructuring
        return basic + allowance;
        // return newemp.basic + newemp.allowance;
    };
    return EmployeeDetails;
}());
var emp1 = {
    firstname: "Ajay",
    lastname: "Shah",
    basic: 5000,
    allowance: 100
};
/* Creating class instance */
var details = new EmployeeDetails(emp1);
console.log("Employee Fullname is " + details.fullname);
console.log("Employee Salary is  " + details.getEmpSalary(emp1));
