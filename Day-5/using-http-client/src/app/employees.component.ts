import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
    selector: 'emp-component',
    templateUrl: './employee.component.html'
  })
export class EmployeeComponent implements OnInit {

    employees: Object;
  
    constructor(private dataService: DataService) { }
  
    ngOnInit() {
      this.dataService.getUsers().subscribe(response => {
          this.employees = response
          console.log("Response = ", response);
        }
      );
    }
}