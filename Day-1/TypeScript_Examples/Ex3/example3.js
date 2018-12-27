/**
 * Example3 - Class, constructor, interface, inheritance, access modifiers
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Defining a class */
var AllDetails = /** @class */ (function () {
    function AllDetails(emp) {
        this.employee = emp;
    }
    AllDetails.prototype.getEmpFullName = function () {
        return this.employee.firstname + " " + this.employee.lastname;
    };
    AllDetails.prototype.getEmpSalary = function () {
        return this.employee.basic + this.employee.allowance;
    };
    return AllDetails;
}());
/* Inheriting AllDetails class */
var EmployeeAllDetails = /** @class */ (function (_super) {
    __extends(EmployeeAllDetails, _super);
    function EmployeeAllDetails(empl) {
        return _super.call(this, empl) || this;
    }
    EmployeeAllDetails.prototype.getAllDetails = function () {
        this.details = _super.prototype.getEmpFullName.call(this) + " earnings Rs. " + _super.prototype.getEmpSalary.call(this);
        return this.details;
    };
    return EmployeeAllDetails;
}(AllDetails));
var emp1 = {
    firstname: "Ajay",
    lastname: "Shah",
    basic: 5000,
    allowance: 100
};
// creating class instance
var myemp = new EmployeeAllDetails(emp1);
console.log("All details: ", myemp.getAllDetails());
console.log("details: ", myemp.details);
console.log("employee: ", myemp.employee);
