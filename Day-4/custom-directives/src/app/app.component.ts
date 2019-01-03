import { Component } from '@angular/core';
import { Person } from './Person/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Custom Directive Example';
  personsList:Person[] = [
    {
      name: "Ajay Sharma",
      age: 23,
      address: "Mumbai",
      email: 'ajay.sharma@gmail.com',
      isGraduate: false
    },
    {
      name: "Sumit Kumar",
      age: 25,
      address: "Nagpur",
      email: 'sumit.kumar@gmail.com',
      isGraduate: true
    },
    {
      name: "Alok Shah",
      age: 24,
      address: "Bangalore",
      email: 'alok.shh@gmail.com',
      isGraduate: true
    },
    {
      name: "Amit Patil",
      age: 26,
      address: "Pune",
      email: 'amit.patil@gmail.com',
      isGraduate: true
    }
  ];

  showGraduateOnly(){
    this.personsList = this.personsList.filter( persons => persons.isGraduate );
  }

}
