/**
 * Example3 - Class, constructor, interface, inheritance & access modifiers
 */

interface Employee {
    firstname: string;
    lastname: string;
    basic: number;
    allowance: number;
}

/* Defining a class */
class AllDetails{
    employee:Employee;

    constructor(emp:Employee){
        this.employee = emp;
    }

    getEmpFullName():string{
        return this.employee.firstname+" "+this.employee.lastname; 
    }

    getEmpSalary():number{
        return this.employee.basic + this.employee.allowance;
    }
}

/* Inheriting AllDetails class */
class EmployeeAllDetails extends AllDetails{
    details:string;     //public by default

    constructor(empl:Employee){
        super(empl);
    }

    getAllDetails():string{
        this.details = super.getEmpFullName() +" earnings Rs. "+ super.getEmpSalary();
        return this.details;
    }

}

var emp1:Employee = {
    firstname: "Ajay",
    lastname: "Shah",
    basic: 5000,
    allowance: 100
}

// creating class instance
var myemp = new EmployeeAllDetails(emp1);
console.log("Employee details are " + myemp.getAllDetails());   // calling by method
console.log("Employee details are " + myemp.details);           // accessing public property
console.log("Employee object " + myemp.employee);               // accessing parent class property